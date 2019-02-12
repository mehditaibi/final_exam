class BidSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :price,
    :created_at
  )

  belongs_to :user
  belongs_to :auction
end
