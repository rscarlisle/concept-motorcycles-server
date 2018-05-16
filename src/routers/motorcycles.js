const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/motorcycles') 
const Motorcycle = require('../../query/motorcycles') 
// const authorization = require("../middleware/authorization") 

router.get('/', (req, res) => {
  Motorcycle.getAll() 
  .then(motorcycles => {
    res.send({
      motorcycles
    })
  })
})

router.get('/:id', (req, res) => {
  Motorcycle.getById(req.params.id) 
  .then(motorcycle => {
    res.send({
      motorcycle
    })
  })
}) 

router.post('/', (req, res) => { 
  console.log(req.body)
  Motorcycle.create(req.body.motorcycle) 
  .then(motorcycle => {
    res.send({
      motorcycle
    })
  })
})

router.put('/:id', (req, res) => {
  Motorcycle.update(req.params.id, req.body.motorcycle) 
  .then(motorcycle => {
    res.send({
      motorcycle
    })
  })
}) 

router.delete('/:id', (req, res) => {
  Motorcycle.destroy(req.params.id) 
  .then(response => {
    res.send({
      msg: 'Successfully deleted'
    })
  })
  .catch(err => {
    res.send({
      msg: 'Cannot Delete', 
      err
    })
  })
})

module.exports = router