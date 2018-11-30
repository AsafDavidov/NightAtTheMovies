class Game < ApplicationRecord
  belongs_to :user
  has_many :movies, through: :game_movie_quote
end
