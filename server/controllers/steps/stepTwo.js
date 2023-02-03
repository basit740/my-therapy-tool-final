// issues
// please use insertMany...
const StepTwo = require('../../models/steps/StepTwo.js');
const Version = require('../../models/Version.js');
const ErrorResponse = require('../../utils/errorResponse.js');

const mongoose = require('mongoose');

exports.createIssue = async (req, res, next) => {
	console.log(req.params);
	const version = await Version.findById(req.params.versionId);
	if (!version) {
		return next(
			new ErrorResponse(
				`no version found with the id of ${req.params.versionId}`,
				404
			)
		);
	}
	console.log(req.body.issues);
	const issues = [...req.body.issues];

	// check if already exits

	const prevIssues = await StepTwo.find({
		version: req.params.versionId,
	});

	// updated flag

	let updatedResult = null;
	if (prevIssues.length > 0) {
		updatedResult = await StepTwo.bulkWrite(
			req.body.issues.map((doc) => ({
				updateMany: {
					filter: { _id: doc.id },
					update: doc,
					upsert: true,
				},
			}))
		);

		res.status(200).json({
			success: true,
			data: updatedResult,
		});
	} else {
		issues.map((issue) => {
			issue['version'] = req.params.versionId;
		});

		const returnedIssues = await StepTwo.insertMany(issues);
		if (!returnedIssues) {
			res.status(400).json({
				success: false,
				message: 'issues not created on StepTwo',
			});
		} else {
			// update version status and count
			if (updatedResult === null) {
				let prevCounts = version.stepsCount;
				prevCounts += 2;
				const updated = await Version.findByIdAndUpdate(req.params.versionId, {
					stepsCount: prevCounts,
					status: prevCounts === 11 ? 'completed' : 'in_progress',
				});
			}

			res.status(200).json({
				success: true,
				data: returnedIssues,
			});
		}
	}
};

exports.getIssues = async (req, res, next) => {
	const version = await Version.findById(req.params.versionId);
	if (!version) {
		return next(
			new ErrorResponse(
				`no version found with the id of ${req.params.versionId}`,
				404
			)
		);
	}

	if (req.params.versionId) {
		const issues = await StepTwo.find({
			version: req.params.versionId,
		});

		if (!issues) {
			res.status(400).json({
				success: false,
				message: 'error finding issues on StepTwo',
			});
		}
		res.status(200).json({
			success: true,
			data: issues,
		});
	} else {
		res.status(400).json({
			success: false,
			message: 'no issues found',
		});
	}
};

exports.deleteIssues = async (req, res, next) => {
	try {
		const version = await Version.findById(req.params.versionId);
		if (!version) {
			return next(
				new ErrorResponse(
					`no version found with the id of ${req.params.versionId}`,
					404
				)
			);
		}
		const deleted = await StepTwo.deleteMany({ version: req.params.versionId });

		if (deleted) {
			res.status(200).json({
				success: true,
				data: deleted,
			});
		} else {
			res.status(400).json({
				success: false,
				message: 'not deleted',
			});
		}
	} catch (err) {
		return next(new ErrorResponse('error deleteing isseus', 400));
	}
};
