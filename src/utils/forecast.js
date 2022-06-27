const request = require('request')

const visibility = (lat,lon,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=330e9a8b23cc56f6b7b5addc28a5bfc6&query='+lat+','+lon+''

    request({url : url,json : true}, (error,response)=>{
        if(error){
            callback("unable to connect",undefined)
        }
        else{
            callback(undefined,{
                visibility : response.body.current.visibility
            })
        }
    })

}


module.exports = visibility