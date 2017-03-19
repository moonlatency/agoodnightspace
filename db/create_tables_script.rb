require 'mysql'

begin
    connection = Mysql.new 'agsmoonlatency.cqwp5aubutwz.us-west-2.rds.amazonaws.com', 'moon_latency', 'sfhacks17'

    connection.query(
      "CREATE TABLE gs_shelters (
        shelter_id   INT NOT NULL,
        name         VARCHAR(255) NOT NULL,
        address      VARCHAR(255),
        city         VARCHAR(50),
        state        VARCHAR(2),
        zip          INT(5) ZEROFILL,
        phone        VARCHAR(15),
        description  VARCHAR(1000),
        open_time    INT(4) ZEROFILL,
        close_time   INT(4) ZEROFILL,
        max_capacity INT,
        PRIMARY KEY  (shelter_id)
      );"
    )

    connection.query(
      "CREATE TABLE gs_shelter_logins (
        shelter_id  INT NOT NULL,
        email       VARCHAR(255),
        password    VARCHAR(255),
        PRIMARY KEY (shelter_id),
        FOREIGN KEY (shelter_id) REFERENCES gs_shelters(shelter_id)
      );"
    )

    connection.query(
      "CREATE TABLE gs_beds_available (
        shelter_id       INT NOT NULL,
        current_capacity INT,
        PRIMARY KEY      (shelter_id),
        FOREIGN KEY      (shelter_id) REFERENCES gs_shelters(shelter_id)
      );"
    )

    connection.query(
      "CREATE TABLE gs_shelter_filters (
        shelter_id       INT NOT NULL,
        lgbtq_friendly   VARCHAR(1),
        shower_available VARCHAR(1),
        women_only       VARCHAR(1),
        men_only         VARCHAR(1),
        allows_families  VARCHAR(1),
        PRIMARY KEY      (shelter_id),
        FOREIGN KEY      (shelter_id) REFERENCES gs_shelters(shelter_id)
      );"
    )

rescue Mysql::Error => e
    puts e.errno
    puts e.error

ensure
    connection.close if connection
end
