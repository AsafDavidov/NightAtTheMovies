class AddPointsToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :points, :integer
  end
end
