//const path = require('path')
const express = require('express')
const agentDetails = require('./agentDB.js')
const  app = express()
//console.log (__dirname)
//const publicDirPath = path.join(__dirname,'../public')

//app.use(express.static(publicDirPath))


app.get('', (req,res) => {
    res.send('<h1>Weather Pravin</h1>')
})

// POST method route
// app.post('', function (req, res) {
//     res.send('POST request to the homepage')
//   })

app.get('/AgentDetails', (req,res) => {
    //console.log(req.query.search)
    if(!req.query.search){
        res.send({
            Warning :"Please Enter Agent ID in URL /AgentDetails?search=A007"
        })
    }else{
        agentDetails(req.query.search, (error,data) => {
            if (error){
                 console.log(error)
            }
        //console.log(data.rows)
            if(data && data.rows[0]){
            res.send(data.rows)
        //res.send('Agent Details')
            }else{
                res.send("No details found For Agent ID "+ req.query.search)
            }
    
        })
    }
}) 


app.get('/help',(req,res) =>{ 
    res.send([{
        name:'Andrew',
        contact:787342348
    },{

        name: 'Jane',
        contact:8733849374 
    }])
})

//about 
app.get('/about',(req,res) =>{
    res.send('Your About')
})


//weather 
app.get('/weather',(req,res) =>{
    res.send({
        forecast: 'forecast',
        location:'Delhi'
    })
})



//app.com
//app.com/help
//app.com/about

app.listen(3001, () => {
    console.log('Express Node Server is up at port 3000 !')
}) 