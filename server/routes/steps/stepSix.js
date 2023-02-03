// contacts
const { protect } = require('../../middleware/auth');
const express = require('express');

const {
	createContacts,
	getContacts,
} = require('../../controllers/steps/stepSix.js');

const router = express.Router();

router.route('/:versionId').post(createContacts).get(getContacts);

module.exports = router;
