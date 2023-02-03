// benefits
const { protect } = require('../../middleware/auth');
const express = require('express');

const {
	createBenefits,
	getBenefits,
} = require('../../controllers/steps/stepEleven.js');

const router = express.Router();

router.route('/:versionId').post(createBenefits).get(getBenefits);

module.exports = router;
