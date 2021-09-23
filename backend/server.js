const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(express.json())
var publicDir = require('path').join(__dirname,'/public/static');
app.use(express.static(publicDir));


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));

})

app.get('/accounts/login', async (req,res) => {
  res.sendFile(path.join(__dirname+'/public/login.html'));
})

app.get('/accounts/signup', async (req,res) => {
  res.send("UNDER CONSTRUCTION")
})

app.get('/product_detail/:id',async (req,res) => {
  res.send("UNDER CONSTRUCTION")
})


app.get('/card/:id',async (req,res) => {
  res.send("UNDER CONSTRUCTION")
})




// Server Listener
app.listen(process.env.PORT || 5000, ()=> {
  console.log("Server is Listening on port 8080")
})
