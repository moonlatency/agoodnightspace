require 'HTTParty'
require 'nokogiri'
require 'JSON'
require 'Pry'
require 'csv'

page = HTTParty.get('http://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi?city=San%20Francisco&state=CA')

parse_page = Nokogiri::HTML(page)

array = parse_page.css('.item_content').to_a
shelters = []

array.each do |a|
  begin
    shelters.push(a.text.split("\n"))
  rescue => e
    puts e
  end
end

shelters.each do |s|
  s.each do |s2|
    s2.strip!
  end
end

shelters.each do |s|
  print s[1], "|", s[2]
  puts
end

# Pry.start(binding)
