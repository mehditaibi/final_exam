class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.date :ends_at
      t.integer :reserve_price 
      t.references :user, foreign_key: true 
      t.timestamps
    end
  end
end
