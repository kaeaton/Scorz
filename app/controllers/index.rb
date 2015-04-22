require 'unirest'
require 'httparty'
require 'dotenv'

get '/' do

	latitude = 37.775
	longitude = -122.419

	# HTTParty.get ("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=6%2F25%2F2015&lat="+latitude.to_s+"&long="+longitude.to_s+"&startdate=+1%2F1%2F2015")
	response = Unirest.get "https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=4%2F20%2F2015&lat="+latitude.to_s+"&long="+longitude.to_s+"&startdate=+1%2F1%2F2015",
  headers:{
    "X-Mashape-Key" => ENV['citizenrequest'],
    "Accept" => "application/json"
  }
  @data = response.body
  @data.each do |crime|
  	if crime["description"].include?("DRUG")
  		Report.create(popo_id: crime["id"], 
  									description: crime["description"], 
  									lat: crime["lat"], 
  									long: crime["long"]
  									)
  	end
  end
  # {drugs: drugs}.to_json


	erb :index
end