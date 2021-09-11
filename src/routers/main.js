const express = require('express');
const router = express.Router();
const {home} = require('../controllers/mainControllers.js');

router.get('/', home);

module.exports = router;