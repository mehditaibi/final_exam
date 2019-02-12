class AuctionsController < ApplicationController

    before_action :authenticate_user!

    def create 
        action = Auction.new auction_params
        auction.user_id = current_user.id
        if auction.save
            render(json: {id: auction.id})
        else
            render(json: {errors: auction.errors}, status: 422)
        end
    end

    def show
        auction = Auction.find(params[:id])
        render(json: auction)
    end

    def index 
        auctions = Auction.all.order(created_at: :desc)
        render json: auctions
    end

    private

    def auction_params
        params.require(:auction).permit(:title, :description, :ends_at, :reserve_price)
    end
end
