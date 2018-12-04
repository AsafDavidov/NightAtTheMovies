class Api::V1::UsersController < ApplicationController
  def create
    user = User.find_or_create_by(user_params)
    render json: user, status: :created
  end

private
def user_params
  params.require(:user).permit(:name)
end
end
