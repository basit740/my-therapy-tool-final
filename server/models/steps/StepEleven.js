const mongoose = require('mongoose');

// benefits

const StepElevenSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	step: {
		type: String,
		enum: ['1', '2', '3', '4', '5'],
		required: true,
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

module.exports = mongoose.model('StepEleven', StepElevenSchema);
