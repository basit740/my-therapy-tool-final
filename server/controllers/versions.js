const Version = require('../models/Version.js');
const StepTwo = require('../models/steps/StepTwo');
const StepThree = require('../models/steps/StepThree');
const StepFour = require('../models/steps/StepFour');
const StepFive = require('../models/steps/StepFive');

const StepSix = require('../models/steps/StepSix');
const StepSeven = require('../models/steps/StepSeven');
const StepEight = require('../models/steps/StepEight');
const StepNine = require('../models/steps/StepNine');
const StepTen = require('../models/steps/StepTen');
const StepEleven = require('../models/steps/StepEleven');

const ErrorResponse = require('../utils/errorResponse.js');
// @desc Create new version
// @route POST /api/v1/versions
// @access Private

exports.createVersion = async (req, res, next) => {
	try {
		req.body['user'] = req.user._id;

		// check duplication verison by the same user

		const versionsByUser = await Version.find({
			user: req.user._id,
		});

		let alreadyFound = false;

		versionsByUser.forEach((v) => {
			if (v.versionName === req.body.versionName) {
				alreadyFound = true;
			}
		});

		if (alreadyFound) {
			return next(new ErrorResponse('No two versions can have same name'));
		}

		const version = await Version.create(req.body);

		if (!version) {
			return next(new ErrorResponse(`error creating new version`, 400));
		}

		res.status(201).json({
			success: true,
			data: version,
		});
	} catch (err) {
		// res.status(400).json({
		// 	success: false,
		// });

		next(err);
	}
};

// @desc Get All versions
// @route GET /api/v1/versions
// @access Private

exports.getVersions = async (req, res, next) => {
	const versions = await Version.find({
		user: req.user._id,
	});

	if (!versions) {
		res.status(400).json({
			success: false,
			message: 'error finding versions',
		});
	}

	res.status(200).json({
		success: true,
		data: versions,
		count: versions.length,
	});
};

// @desc Get a single Version by Id
// @route GET /api/v1/versions/:id
// @access Private

exports.getVersion = async (req, res, next) => {
	const version = await Version.findById(req.params.id);

	if (!version) {
		res.status(400).json({
			success: false,
			message: 'error finding version',
		});
	}

	res.status(200).json({
		success: true,
		data: version,
	});
};

exports.getVersionReport = async (req, res, next) => {
	const version = await Version.findById(req.params.id);

	const allData = [];
	const stepTwoData = await StepTwo.find({
		version: req.params.id,
	});

	let stepData = null;
	for (let i = 2; i <= 11; i++) {
		if (i === 2) {
			stepData = await StepTwo.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepTwo',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 3) {
			stepData = await StepThree.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepThree',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 4) {
			stepData = await StepFour.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepFour',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 5) {
			stepData = await StepFive.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepFive',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 6) {
			stepData = await StepSix.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepSix',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 7) {
			stepData = await StepSeven.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepSeven',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 8) {
			stepData = await StepEight.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepEight',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 9) {
			stepData = await StepNine.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepNine',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 10) {
			stepData = await StepTen.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepTen',
				data: stepData,
			};
			allData.push(data);
		} else if (i === 11) {
			stepData = await StepEleven.find({
				version: req.params.id,
			});
			const data = {
				step: 'StepEleven',
				data: stepData,
			};
			allData.push(data);
		}
	}

	// All Steps

	const finalData = {
		versionName: version.versionName,
		stepsData: allData,
	};

	if (!version) {
		res.status(400).json({
			success: false,
			message: 'error finding version',
		});
	}

	res.status(200).json({
		success: true,
		data: finalData,
	});
};

// @desc Update Version
// @route PUT /api/v1/versions/:id
// @access Private

exports.updateVersion = async (req, res, next) => {
	try {
		const updatedVersion = await Version.findByIdAndUpdate(
			req.params.id,
			req.body
		);

		if (!updatedVersion) {
			return res.status(400).json({
				success: false,
				message: 'no version found with the id of' + req.params.id,
			});
		}

		res.status(200).json({
			success: true,
			data: updatedVersion,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
		});
	}
};

// @desc Delete Version
// @route DELETE /api/v1/versions/:id
// @access Private

exports.deleteVersion = async (req, res, next) => {
	const deleted = await Version.findByIdAndDelete(req.params.id);

	if (!deleted) {
		res.status(400).json({
			success: false,
			message: 'no version found with the id of' + req.params.id,
		});
	}

	res.status(200).json({
		success: true,
		data: deleted,
	});
};
