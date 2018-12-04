class MovieQuote < ApplicationRecord
  has_many :games, through: :game_movie_quote
end
