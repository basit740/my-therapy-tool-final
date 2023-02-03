// tags

const StepFour = require('../../models/steps/StepFour.js');
const Version = require('../../models/Version.js');
const ErrorResponse = require('../../utils/errorResponse.js');

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

		// remove existing tags for that version

		const tags = await StepFour.find({
			version: req.params.versionId,
		});

		let result = null;

		if (tags.length > 0) {
			result = await StepFour.deleteMany({
				version: req.params.versionId,
			});
		}

		req.body.tags.map((tag) => {
			tag['version'] = req.params.versionId;
		});

		const returnedTags = await StepFour.insertMany(req.body.tags);
		if (!returnedTags) {
			return next(new ErrorResponse('tags not created on StepFour', 400));
		}

		if (result === null) {
			let prevCounts = version.stepsCount;
			prevCounts += 1;
			const updated = await Version.findByIdAndUpdate(req.params.versionId, {
				stepsCount: prevCounts,
				status: prevCounts === 11 ? 'completed' : 'in_progress',
			});
		}

		res.status(200).json({
			success: true,
			data: returnedTags,
			deleted: result,
			count: returnedTags.length,
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

		const tags = await StepFour.find({ version: req.params.versionId });

		if (!tags) {
			return next(new ErrorResponse('error finding tags on StepFour'));
		}
		res.status(200).json({
			success: true,
			data: tags,
			count: tags.length,
		});
	} catch (err) {
		next(err);
	}
};
