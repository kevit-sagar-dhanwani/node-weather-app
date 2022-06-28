const request = require('request')

const temperature = (lat,lon,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=330e9a8b23cc56f6b7b5addc28a5bfc6&query='+lat+','+lon+''

    request({url : url,json : true}, (error,response)=>{
        if(error){
            callback("unable to connect",undefined)
        }
        else if(response.body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,
                'Current Temperature is : ' + response.body.current.temperature,
                     
            )
        }
    })

}


module.exports = temperature