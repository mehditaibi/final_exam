class SetReservePriceDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column :auctions, :reserve_price, :integer, :default => 0
  end
end
