// goals

const StepNine = require('../../models/steps/StepNine.js');
const Version = require('../../models/Version');
const ErrorResponse = require('../../utils/errorResponse');

exports.createGoals = async (req, res, next) => {
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

		const exGoals = await StepNine.find({
			version: req.params.versionId,
		});

		let result = null;

		if (exGoals.length > 0) {
			result = await StepNine.deleteMany({
				version: req.params.versionId,
			});
		}

		req.body.goals.map((goal) => {
			goal['version'] = req.params.versionId;
		});
		const goals = await StepNine.insertMany(req.body.goals);
		if (!goals) {
			return next(new ErrorResponse('goals not creatd on Step Nine', 400));
		}

		//

		if (result === null) {
			let prevCounts = version.stepsCount;
			prevCounts += 1;
			const updated = await Version.findByIdAndUpdate(req.params.versionId, {
				stepsCount: prevCounts,
				status: prevCounts === 11 ? 'completed' : 'in_progress',
			});
		}

		//

		res.status(200).json({
			success: true,
			data: goals,
		});
	} catch (err) {
		next(err);
	}
};

exports.getGoals = async (req, res, next) => {
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
		const goals = await StepNine.find({
			version: req.params.versionId,
		});

		if (!goals) {
			return next(new ErrorResponse('error finding goals on Step Nine', 400));
		}
		res.status(200).json({
			success: true,
			count: goals.length,
			data: goals,
		});
	} catch (err) {
		next(err);
	}
};
