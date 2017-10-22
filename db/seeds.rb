# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# allow csv file
require 'csv'

#csv file is located in lib/csv_seeds folder
csv_text = File.read(Rails.root.join('lib', 'csv_seeds', 'AcappellaDatabase.csv'))

# Parse the csv file and ignore the first line as it is the header names for the columns
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

# Loop trough the parsed data
csv.each do |row|
	t = Acagroup.new
	t.Name = row['Name']
	t.University = row['University']
	t.Gender = row['Gender']
	t.City = row['City']
	t.State = row['State']
	t.Email = row['Email']
	t.Website = row['Website']
	t.save
	puts " #{t.Name} was saved"
end

puts "The Acappella Database has been updated."