class BidsController < ApplicationController

    def create 
        def create 
            bid = Bid.new bid_params
            bid.user_id = current_user.id
            bid.auction = params[:auction_id]
            if bid.save
                render(json: {id: bid.id})
            else
                render(json: {errors: bid.errors}, status: 422)
            end
        end
    end

    private

    def bid_params
        params.require(:bid).permit(:price)
    end
end
