class GameMovieQuote < ApplicationRecord
  belongs_to :game
  belongs_to :movie_quote
end
