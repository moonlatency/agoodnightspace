require 'csv'
require 'mysql'

connection = Mysql.new 'localhost', 'ec2-user', '', 'ags_prod'

csv_options = {
  headers: true,
  col_sep: '|',
  quote_char: "\x00"
}

shelter_id = 1

begin
  CSV.foreach('seed_data.csv', csv_options) do |row|
    row_hash = row.to_h

    row_hash.each do |k, v|
      next unless row_hash[k].nil?
      row_hash[k] = "NULL"
    end

    connection.query(
      "INSERT INTO gs_shelters
      (shelter_id, name, address, city, state, zip, phone, description, open_time, close_time, max_capacity)
      VALUES (
        #{shelter_id},
        \"#{row_hash["name"]}\",
        \"#{row_hash["address"]}\",
        \"#{row_hash["city"]}\",
        \"#{row_hash["state"]}\",
        \"#{row_hash["zip"]}\",
        \"#{row_hash["phone"]}\",
        \"#{row_hash["description"]}\",
        #{row_hash["open_time"]},
        #{row_hash["close_time"]},
        #{row_hash["max_capacity"]}
      );"
    )

    connection.query(
      "INSERT INTO gs_shelter_logins (shelter_id) VALUES (#{shelter_id});"
    )

    connection.query(
      "INSERT INTO gs_beds_available
      (shelter_id, current_capacity)
      VALUES (
        #{shelter_id},
        #{row_hash["current_capacity"]}
      );"
    )

    row_hash.each do |k, v|
      next unless row_hash[k] == "NULL"
      row_hash[k] = ""
    end

    connection.query(
      "INSERT INTO gs_shelter_filters VALUES (
      #{shelter_id},
      \"#{row_hash["lgbtq_friendly"]}\",
      \"#{row_hash["shower_available"]}\",
      \"#{row_hash["women_only"]}\",
      \"#{row_hash["men_only"]}\",
      \"#{row_hash["allows_families"]}\"
      );"
    )

    shelter_id += 1
  end
rescue Mysql::Error => e
  puts e.errno
  puts e.error
  puts e.backtrace

ensure
  connection.close if connection
end
