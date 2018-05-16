const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/bookmarks_motorcycles')
const authorization = require("../middleware/authorization")