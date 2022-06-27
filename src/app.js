// 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


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const visibility = require('./utils/forecast')

//console.log(__dirname)
//console.log(__filename)
const app = express()
const port = process.env.PORT || 3080


//define path for express config
const publicPath = path.join(__dirname, '../public')


//customized directory
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')




//set up handlers
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

//static directory to serve
app.use(express.static(publicPath))


//hbs handlers
app.get('', (req, res) => {
    res.render('index', {
        name: 'Use this for weather app',
        title: 'weather app'
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Sagar',
        title: 'weather app'
    })

})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Sagar',
        title: 'weather app'
    })

})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: "please provide search"
        })
    }
    res.send({
        products: []
    })

})


// app.get('',(req,res)=>{
//     res.render('index',{
//         title : 'sagar',
//         name  : 'dhanwani'
//     })
// })

// app.get('',(req,res)=>{
//     res.send("hello express")
// })

// app.get('/help',(req,res)=>{
//     res.send('<h1>Abbout</h1>') 
// })

// app.get('/route',(req,res)=>{
//     res.send({
//         name : 'sagar',
//         age : 21
//     })
// })

// app.get('/weather', (req, res) => {
//     if (!req.query.lat && !req.query.lon) {
//         return res.send({
//             error: "Please provide laatitude and longitude"
//         })
//     }

//     geocode(req.query.lat,req.query.lon, (error, tempdata) => {
//         if(error){
//             return res.send({error })
//         }
//         //console.log(data)
//         visibility(req.query.lat,req.query.lon, (error, data) => {
//             if(error){
//                 return res.send({error})
//             }
            
//             res.send({
//                 temprature : tempdata,
//                 visibility : data
//             })
//         })
//     })
//    // 37.8267, -122.411


// })


app.get('/about/*', (req, res) => {
    res.send("no content")
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: 'Error page',
        title: 'This is error ',
        error: 'Help Article Not Found'
    })
})



app.get('*', (req, res) => {
    res.render('404', {
        name: 'Error page',
        title: 'This is error ',
        error: '404 Not Found'
    })
})

app.listen(port, () => {
    console.log('Server is listing on port '+port)
})

