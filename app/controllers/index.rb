require 'unirest'
require 'httparty'
require 'dotenv'

get '/' do

	latitude = 37.890
	longitude = -122.293

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
    if crime["description"].include?("NARCOTIC")
      Report.create(popo_id: crime["id"],
                    description: crime["description"],
                    lat: crime["lat"],
                    long: crime["long"]
                    )
    end
    if crime["description"].include?("POSSESSION")
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

get '/sf'

  # response = HTTParty.get ("http://sanfrancisco.crimespotting.org/crime-data?format=json&count=200&type=Na&dstart=2015-01-01")

  # @sfdata = response[1]

  erb :index

end
