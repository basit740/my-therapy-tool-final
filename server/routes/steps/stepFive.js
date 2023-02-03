// actions
const { protect } = require('../../middleware/auth');
const express = require('express');

const {
	createActions,
	getActions,
} = require('../../controllers/steps/stepFive.js');

const router = express.Router();

router.route('/:versionId').post(createActions).get(getActions);

module.exports = router;
