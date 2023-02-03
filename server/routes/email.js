const express = require('express');

const { sendEmail } = require('../controllers/email');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

router.route('/').post(sendEmail);

module.exports = router;
