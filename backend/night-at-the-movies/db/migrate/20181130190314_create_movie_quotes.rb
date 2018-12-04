class CreateMovieQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_quotes do |t|
      t.string :content
      t.integer :year
      t.integer :rating
      t.string :title
      t.string :character
      t.string :actor
      t.string :img_url
      t.string :vid_url

      t.timestamps
    end
  end
end
