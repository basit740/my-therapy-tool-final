const mongoose = require('mongoose');

const VersionSchema = new mongoose.Schema({
	versionName: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ['completed', 'not_started', 'in_progress'],
		default: 'not_started',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	stepsCount: {
		type: Number,
		default: 0,
	},

	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: false,
	},
});

VersionSchema.virtual('steptwos', {
	ref: 'StepTwo',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});

VersionSchema.virtual('stepthrees', {
	ref: 'StepThree',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
VersionSchema.virtual('stepfours', {
	ref: 'StepFour',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});

VersionSchema.virtual('stepfives', {
	ref: 'StepFive',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
VersionSchema.virtual('stepsixs', {
	ref: 'StepSix',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
VersionSchema.virtual('stepsevens', {
	ref: 'StepSeven',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
VersionSchema.virtual('stepeights', {
	ref: 'StepEight',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
VersionSchema.virtual('stepnines', {
	ref: 'StepNine',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});

VersionSchema.virtual('steptens', {
	ref: 'StepTen',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
VersionSchema.virtual('stepelevens', {
	ref: 'StepEleven',
	localField: '_id',
	foreignField: 'version',
	justOne: false,
});
module.exports = mongoose.model('Version', VersionSchema);
