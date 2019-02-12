class AuctionSerializer < ActiveModel::Serializer
  attributes( 
    :id,
    :title,
    :description,
    :ends_at,
    :reserve_price
  )

  belongs_to(:user, key: :owner) 
  has_many(:bids)
  
end
