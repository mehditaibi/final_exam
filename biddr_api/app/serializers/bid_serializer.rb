class BidSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :price,
    :auction_id,
    :created_at
  )

  belongs_to :user
  belongs_to :auction
end
