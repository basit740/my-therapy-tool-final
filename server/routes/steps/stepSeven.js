// thoughts
const { protect } = require('../../middleware/auth');
const express = require('express');

const {
	createThoughts,
	getThoughts,
} = require('../../controllers/steps/stepSeven.js');

const router = express.Router();

router.route('/:versionId').post(createThoughts).get(getThoughts);

module.exports = router;
