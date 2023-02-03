// tags

const StepTen = require('../../models/steps/StepTen.js');
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

		const exTags = await StepTen.find({
			version: req.params.versionId,
		});

		let result = null;

		if (exTags.length > 0) {
			result = await StepTen.deleteMany({
				version: req.params.versionId,
			});
		}

		req.body.tags.map((tag) => {
			tag['version'] = req.params.versionId;
		});
		const tags = await StepTen.insertMany(req.body.tags);
		if (!tags) {
			return next(new ErrorResponse('tags not created on Step Ten'));
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
			data: tags,
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
		const tags = await StepTen.find({
			version: req.params.versionId,
		});

		if (!tags) {
			return next(new ErrorResponse('error finding tags on Step Ten'));
		}
		res.status(200).json({
			success: true,
			data: tags,
		});
	} catch (err) {
		next(err);
	}
};
