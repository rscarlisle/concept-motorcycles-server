const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')
// const authorization = require("../middleware/authorization")
const Users = require('../../query/users')
const Profiles = require('../../query/profiles') 
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken') 
const passport = require('passport') 
// router.use(authorization.protected) 

router.get('/', (req, res) => { 
  Users.getAll() 
  .then(users => {
    res.send({
      users
    })
  })
})

// router.get('/:id', (req, res) => {
//   Users.getById(req.params.id) 
//   .then(user => {
//     res.send({
//       user
//     })
//   })
// }) 

// {
// 	"email": "baibhavxyz@gmail.com", 
// 	"name": "Baibhav Gautam", 
// 	"summary": "Hi I am Baibhav. I like coding and riding bikes",
// 	"image_url": "https://avatars3.githubusercontent.com/u/25779760?s=460&v=4", 
// 	"username": "baibhavx", 
// 	"password": "hunter12" 
// }

router.post('/', (req, res) => {
  Users.getByEmail(req.body.email) 
  .then(user => {
    if(user === undefined) {
      // Create a profile 
      Profiles.create({
        name: req.body.name, 
        summary: req.body.summary, 
        image_url: req.body.image_url
      })
      .then(profileList => {
        let id = profileList[0].id // Associate this new profile with the user 
        //Now we need to create a new user but need to hash the password before savng 
        //it to the database 
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err 
            let newUser = {
              email: req.body.email, 
              username: req.body.username, 
              password: hash, 
              profile_id: id
            } 
            Users.create(newUser)
            .then(user => {
              res.send({
                user
              })
            })
          })
        })
      })
    } else {
      res.send({
        err: "That email is already registered"
      })
    }
  })
}) 


router.post('/login', (req, res) => {
  const email = req.body.email 
  const password = req.body.password 

  Users.getByEmail(email) 
  .then(user => {
    if(user === undefined) {
      res.status(400).send({
        err: "Invalid Credentials"
      })
    } else {
      bcrypt.compare(password, user.password)
      .then(doesMatch => {
        if(doesMatch) {
          // Users matched
          //Create payload & include profile details in the payload 
          Profiles.getById(user.profile_id) 
          .then(profile => {
            const payload = {
              user_id: user.id, 
              email: user.email, 
              username: user.username, 
              profile_id: user.profile_id, 
              name: profile.name, 
              summary: profile.summary, 
              image_url: profile.image_url
            } 
            console.log(payload)
            jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => { 
              console.log(`The token is`, token)
              res.json({
                success: true, 
                token: 'Bearer ' + token
              })
            })
          })
        } else {
          res.status(400).json({err: "Invalid Credentials"})
        }
      })
    }
  })
}) 

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    msg: req.user
  })
})

module.exports = router