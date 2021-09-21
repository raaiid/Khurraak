const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())

app.get('/', (req,res) => {
  res.json({
    message: "Hello World",
  
  })
})



// Server Listener
app.listen(8080, ()=> {
  console.log("Server is Listening on port 8080")
})
