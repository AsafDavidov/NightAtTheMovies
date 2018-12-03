# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Sample Ruby code for user authorization
#
# t.string "content"
# t.integer "year"
# t.integer "rating"
# t.string "title"
# t.string "character"
# t.string "actor"
# t.string "img_url"
# t.string "vid_url"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
require 'nokogiri'
require 'open-uri'
require 'rest-client'
#####################################SEEDING CUSTOMIZED MOVIE QUOTE API#########################################
def youtube_search(query_term)
        query_term = query_term + " trailer"
        query_term = query_term.split(" ").map do |word|
          word.scan(/\w+/)[0]
        end.join("%20")
        url = "https://www.youtube.com/results?search_query=#{query_term}"
        document = Nokogiri::HTML(RestClient.get(url))
        first_hit = document.css("a").map {|a| a['href']}.select {|link| link.include?("watch")&& link.length == 20}.first
        first_hit_url = "https://www.youtube.com/#{first_hit}"
end

i=1
10.times do
  filter = MovieQuotes.new
  filter.by_page(i).results.each do |result|
    MovieQuote.create("content":result["content"],"year":result["year"],"rating":result["rating"],"title":result["movie"]["title"].split(" ").map{|word|word.scan(/\w+/)[0]}.join(" "),"character":result["character"]["name"],"actor":result["actor"]["name"],"img_url":result["image_large_url"],"vid_url":youtube_search(result["movie"]["title"]))
  end
  i = i+1
end

#####################################SEEDING CUSTOMIZED MOVIE QUOTE API#########################################
