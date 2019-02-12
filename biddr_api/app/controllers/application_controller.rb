class ApplicationController < ActionController::API

    private

    def authenticate_user!
        unless current_user.present?
          render json: {status: 401}, status: 401
        end
    end

    def current_user
        return unless session[:user_id]
        @current_user ||= User.find(session[:user_id])
    end
    
end
