// tags

const StepEight = require('../../models/steps/StepEight.js');
const Version = require('../../models/Version');
const ErrorResponse = require('../../utils/errorResponse');

exports.createTags = async (req, res, next) => {
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

		//tags

		const tags = await StepEight.find({
			version: req.params.versionId,
		});

		let result = null;

		if (tags.length > 0) {
			result = await StepEight.deleteMany({
				version: req.params.versionId,
			});
		}

		req.body.tags.map((tag) => {
			tag['version'] = req.params.versionId;
		});
		const tag = await StepEight.insertMany(req.body.tags);
		if (!tag) {
			return next(new ErrorResponse('tags not created on Step Eight', 400));
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
			data: tag,
		});
	} catch (err) {
		next(err);
	}
};

exports.getTags = async (req, res, next) => {
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
		const tags = await StepEight.find({ version: req.params.versionId });

		if (!tags) {
			return next(new ErrorResponse('error finding tags on Step Eight'));
		}
		res.status(200).json({
			success: true,
			count: tags.length,
			data: tags,
		});
	} catch (err) {
		next(err);
	}
};
