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
    validate(:end_after_start)

    private 

    def end_after_start
        if self.created_at > self.ends_at
            self.errors.add(:ends_at, "Your bid must end after it's been posted")
        end
    end
end
