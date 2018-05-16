const {
  create,
  getAll, 
  getById, 
  update, 
  destroy, 
  getByEmail
} = require('./users')   


// getByEmail('bob@example.com') 
// .then(res => {
//   console.log(res)
// })

// getAll()
// .then(users => {
//   console.log(users)
// }) 

// getById(18) 
// .then(user => {
//   console.log(user)
// }) 

// const updatedUser = {
//   email: 'bob@gmail.com', 
//   username: 'bob_is_good', 
//   password: 'hunter12', 
//   profile_id: 1
// }

// update(16, updatedUser)
// .then(res => {
//   console.log(res)
// }) 

// const newUser = {
//   email: 'michelle@gmail.com', 
//   username: 'michelle_is_good', 
//   password: 'password', 
//   profile_id: 4
// }


// create(newUser)
// .then(user => {
//   console.log(user)
// })


// destroy(19)
// .then(res => {
//   console.log(res)
// })


const Profile = require('./profiles')

// const profile =   { 
//   id: 5,
//   name: 'new Profile', 
//   summary: 'hey', 
//   image_url: 'http://example.com'
// }

// Profile.getAll() 
// .then(profiles => {
//   console.log(profiles)
// }) 

// Profile.getById(2) 
// .then(profile => {
//   console.log(profile)
// })


// Profile.create(profile) 
// .then(inserted => {
//   console.log(inserted)
// })

// const updatedProfile =   { 
//   name: 'new Profile updated', 
//   summary: 'hey updated', 
//   image_url: 'http://example.com'
// }

// Profile.update(5, updatedProfile) 
// .then(updated => {
//   console.log(updated)
// })


// Profile.destroy(5) 
// .then(res => {
//   console.log(res)
// })