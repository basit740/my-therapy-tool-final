const mongoose = require('mongoose');

// Thoughts

const StepSevenSchema = new mongoose.Schema({
	thoughtContent: {
		type: String,
	},
	thoughtCategory: {
		type: String,
		enum: ['likely', 'real', 'probably', 'unrealistic'],
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

module.exports = mongoose.model('StepSeven', StepSevenSchema);
