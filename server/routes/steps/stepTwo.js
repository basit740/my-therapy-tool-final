const express = require('express');
const { protect } = require('../../middleware/auth');
const {
	createIssue,
	getIssues,
	deleteIssues,
} = require('../../controllers/steps/stepTwo.js');

const router = express.Router();
router.route('/:versionId').post(protect, createIssue);
router.route('/:versionId').get(protect, getIssues);
router.route('/:versionId').delete(protect, deleteIssues);

module.exports = router;
