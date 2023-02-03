const mongoose = require('mongoose');

// Contacts

const StepSixSchema = new mongoose.Schema({
	contactDetail: {
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

module.exports = mongoose.model('StepSix', StepSixSchema);
