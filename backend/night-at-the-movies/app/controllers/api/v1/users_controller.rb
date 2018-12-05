class Api::V1::UsersController < ApplicationController
  def show
    games = Game.where(user_id: params[:id])
    formatted_games = games.map{|g| {id: g.id, time_taken: g.time_taken, points: g.points, date: Date.parse(g.created_at.to_s), ticket: g.points == 100 ? 'YAY!' : 'NAY...'}}
    render json: formatted_games, status: :ok
  end

  def create
    user = User.find_or_create_by(user_params)
    render json: user, status: :created
  end

  def destroy
    Game.where(user_id: params[:id]).destroy_all
    render status: :ok
  end

private
def user_params
  params.require(:user).permit(:name)
end
end
