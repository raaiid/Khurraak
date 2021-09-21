const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(express.json())

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/design2.html'));

})



// Server Listener
app.listen(8080, ()=> {
  console.log("Server is Listening on port 8080")
})
