const express = require('express')

const app = express()




app.get('/users', function(req ,res){
    console.log("this are the list of users")
    return res.json({Users: ['niel','keana','Caspillo','Galleto']})
})


app.listen(3000, () =>{
    console.log('Listening to port 3000')
})