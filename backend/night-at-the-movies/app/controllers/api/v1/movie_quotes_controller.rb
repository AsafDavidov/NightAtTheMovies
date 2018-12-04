class Api::V1::MovieQuotesController < ApplicationController
  def index
    @movies = MovieQuote.all
    render json: @movies, status: :ok
  end

end
