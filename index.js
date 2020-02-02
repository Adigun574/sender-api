const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const { dbUri } = require('./environment')
const users = require('./routes/users')
const profiles = require('./routes/profiles')
const jobs = require('./routes/jobs')
const applications = require('./routes/applications')
const messages = require('./routes/messages')

mongoose.createConnection(dbUri, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
  .then((res)=>{console.log('connected to db')})
  .catch((error) => {console.log(error.message)});

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.json({extended: false}))

app.get('/', (req,res)=>{
  res.send('<h1><b>welcome to heaven motherfuckers</b><h1>')
})

app.use('/users', users)
app.use('/profiles', profiles)
app.use('/jobs', jobs)
app.use('/applications', applications)
app.use('/messages', messages)

app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)})

