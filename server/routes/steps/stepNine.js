// goals
const { protect } = require('../../middleware/auth');
const express = require('express');

const {
	createGoals,
	getGoals,
} = require('../../controllers/steps/stepNine.js');

const router = express.Router();

router.route('/:versionId').post(createGoals).get(getGoals);

module.exports = router;
