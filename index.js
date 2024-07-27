const express = require('express')
const authRouter = require('./routes')


const app = express()

app.use(express.json()).use(express.urlencoded()) //need ni sya para mapagawas ang json nga file

app.get('/users', function(req ,res){ //req stands for request and res is for respond 
    console.log("this are the list of users")
    return res.json({Users: ['niel','keana','Caspillo','Galleto']})//get is for getting hard incoded data
})


app.use("/user",authRouter)



app.listen(3000, () =>{
    console.log('Listening to port 3000')
})