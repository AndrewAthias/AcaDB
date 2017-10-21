class CreateSearchings < ActiveRecord::Migration[5.1]
  def change
    create_table :searchings do |t|
      t.string :Name
      t.string :Gender
      t.string :City
      t.string :State
      t.string :Email
      t.string :University
      t.string :Website

      t.timestamps
    end
  end
end
