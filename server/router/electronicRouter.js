const express = require('express');
const router = express.Router();
const { electronicCtrl } = require('../controllers/electronicController');

router.route('/store')
  .get(electronicCtrl.get)
  .post(electronicCtrl.post)

module.exports = {
  router: router
};
