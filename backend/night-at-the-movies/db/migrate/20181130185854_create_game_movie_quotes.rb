class CreateGameMovieQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :game_movie_quotes do |t|
      t.integer :game_id
      t.integer :movie_id
      
      t.timestamps
    end
  end
end
