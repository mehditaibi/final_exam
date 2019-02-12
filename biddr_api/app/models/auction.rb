class Auction < ApplicationRecord

    belongs_to :user
    has_many :bids, dependent: :destroy

    validates(:title, presence: true)
    validates(
        :description, 
        presence: {
        message: "must exist"},
        length: { minimum: 10 })
    validates(:ends_at, presence: true)

end
