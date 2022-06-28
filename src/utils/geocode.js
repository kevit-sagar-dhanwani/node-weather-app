const request = require('request')


const geocode = (address,callback)=>{
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FnYXIyMTA1IiwiYSI6ImNsNHdsZTZ1ZjEwdWgzY25rMzJiY2J3ejMifQ.MR6e3VEf3rBG3KAhAU8mVg&limit=1'

    request({url : url,json : true}, (error,response)=>{
        if(error){
            callback("unable to connect",undefined)
        }
        else if(response.body.features.length ===  0){
            callback("Unable to find location. Try another way",undefined)
        }
        else{
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
