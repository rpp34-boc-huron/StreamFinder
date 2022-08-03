const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/Auth');
router.route('/login').post(login);
module.exports = router;