class CreateSearchings < ActiveRecord::Migration[5.1]
  def change
    create_table :searchings do |t|
      t.string :name
      t.string :gender
      t.string :location
      t.string :email
      t.string :university
      t.string :website

      t.timestamps
    end
  end
end
