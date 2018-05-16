const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const passport = require('passport') 

// const morgan = require('morgan')
const db = require('./query/db.js')
const cors = require('cors')
require('dotenv').config()

app.disable('x-powered-by')

// if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // Serve frontend files from the frontend repo
  app.use(express.static('../motorcycle-international')) // this allows you to use local host and deploying will not conflict with production mode
}

const usersRouters = require("./src/routers/users.js")
const motorcyclesRouters = require('./src/routers/motorcycles.js')
// const profilesRouters = require('./src/routers/profiles.js');
// const bookmarksRouters = require('./src/routers/bookmarks.js')
// const bookmarksMotorcyclesRouters = require('./src/routers/bookmarks_motorcycles.js')

//Passport Middleware 
app.use(passport.initialize()) 

//Passport Config 
require('./config/passport')(passport)



app.use("/users", usersRouters)
app.use('/motorcycles', motorcyclesRouters)
// app.use('/profiles', profilesRouters)
// app.use('/bookmarks', bookmarksRouters)
// app.use('/bookmarks_motorcycles', bookmarksMotorcyclesRouters)

app.use((err, req, res, next) => {
  console.error(err.stack) // Log the stacktrace of any errors that happen
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exports = app
