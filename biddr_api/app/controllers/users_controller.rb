class UsersController < ApplicationController

    before_action :authenticate_user!, only: [:current, :show, :destroy]

    def current 
        render json: { 
            status: 200,
            current_user: 
            ActiveModelSerializers::SerializableResource.new(current_user).as_json}
    end

    def show 
        user = User.find(params[:id])        
        render json: user
    end

    def destroy
        user = User.find(params[:id])        
        if user.destroy
            render(json: {status:200}, status: 200)
        else
            render(json: {errors: user.errors}, status: 422)
        end
    end

    def create 
        user = User.new user_params
        if user.save
            session[:user_id] = user.id
            render json: {id: user.id}
        else
            render(
                json: {errors: user.errors},
                status: 422
            )
        end
    end
    
end
