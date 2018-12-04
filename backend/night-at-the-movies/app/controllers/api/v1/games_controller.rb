class Api::V1::GamesController < ApplicationController
  def create
    game = Game.new(game_params)
    game.save
    render json: game, status: :created
  end

private
def game_params
  params.require(:game).permit(:time_taken, :user_id)
end

end # end GamesController
