const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

// 1.회원가입
router.post('/signup', userController.rotuer)



module.exports = {
  router
}