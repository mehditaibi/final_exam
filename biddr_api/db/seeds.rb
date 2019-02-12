User.destroy_all
Auction.destroy_all
Bid.destroy_all

PASSWORD = "supersecret"

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD
)

10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
      first_name: first_name,
      last_name: last_name,
      email: "#{first_name.downcase}-#{last_name.downcase}@example.com",
      password: PASSWORD
    )
end
  users = User.all


100.times do 
    created_at = Faker::Date.backward(365 * 5)
    ends_at = Faker::Date.forward(365)

    a = Auction.create(
        title: Faker::Cannabis.strain,
        description: Faker::Cannabis.health_benefit,
        ends_at: ends_at, 
        reserve_price: rand(100),
        user: users.sample,
        created_at: created_at,
        updated_at: created_at
    )
    
    if a.valid?
        10.times do
            a.bids << Bid.new(
                price: rand(1_000),
                user: users.sample
            )
        end
    end
end

users = User.all
auctions = Auction.all
bids = Bid.all

puts "generated #{users.count} users"
puts "generated #{auctions.count} auctions"
puts "generated #{bids.count} bids"

