const request = require('request')

const forecast = (latitude,longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/216df07630a7ce0b4c24d5d97928c27a/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({url:url , json:true}, (error,response)=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined,{
                placename: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                Rainchance: response.body.currently.precipProbability
            })
        }
    })

}

module.exports = forecast