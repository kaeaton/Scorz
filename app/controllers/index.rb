require 'unirest'

get '/' do

	

	response = Unirest.get "https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate="+6%2F25%2F2015+"&lat="+latitude+"&long="+longitude+"&startdate=+1%2F1%2F2015",
  headers:{
    "X-Mashape-Key" => citizenrequest,
    "Accept" => "application/json"
  }





	erb :index
end