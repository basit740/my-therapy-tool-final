const mongoose = require('mongoose');

const StepNineSchema = new mongoose.Schema({
	goalTitle: {
		type: String,
	},
	goalYear: {
		type: Number,
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

module.exports = mongoose.model('StepNine', StepNineSchema);
