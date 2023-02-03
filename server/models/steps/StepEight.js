const mongoose = require('mongoose');

// Tags

const StepEightSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	status: {
		type: String,
		default: 'not_selected',
		enum: ['selected', 'not_selected'],
		unique: false,
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

module.exports = mongoose.model('StepEight', StepEightSchema);
