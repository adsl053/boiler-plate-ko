const express = require('express') // express module을 가져온다
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://adsl053:dmsdn0498@boilerplate.561sevw.mongodb.net/?retryWrites=true&w=majority',{
  
}).then(()=>console.log('mongodb connect ...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  // port 5000번을 실행해서 위 hello world와 log 실행