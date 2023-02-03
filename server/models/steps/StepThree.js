const mongoose = require('mongoose');

// Feelings

const StepThreeSchema = new mongoose.Schema({
	feelingContent: {
		type: String,
	},
	feelingReflection: {
		type: String,
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

module.exports = mongoose.model('StepThree', StepThreeSchema);
