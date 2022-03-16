const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const { User } = require("./models/User")
const bodyParser = require('body-parser')
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(config.mongoURI
).then( () => console.log('MongoDB Connected'))
 .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! BooKi')
})

app.post('/signup', (req, res) => {
  //회원 가입 할 때 작성한 정보들을 가져와 DB에 넣어준다
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})