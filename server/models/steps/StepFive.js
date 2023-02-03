const mongoose = require('mongoose');

const StepFiveSchema = new mongoose.Schema({
	actionContent: {
		type: String,
	},
	actionDate: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	version: {
		type: mongoose.Schema.ObjectId,
		ref: 'Version',
		required: false,
	},
});

module.exports = mongoose.model('StepFive', StepFiveSchema);
