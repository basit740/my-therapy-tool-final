const express = require('express');

const { protect } = require('../../middleware/auth');

const {
	createFeelings,
	getFeelings,
} = require('../../controllers/steps/stepThree.js');

const router = express.Router();

router.route('/:versionId').post(createFeelings).get(getFeelings);

module.exports = router;
