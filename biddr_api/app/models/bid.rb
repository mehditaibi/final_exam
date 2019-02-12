class Bid < ApplicationRecord

    belongs_to :user
    belongs_to :auction

    validates(:price, :numericality => {:greater_than => 0})

end
