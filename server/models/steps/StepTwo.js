const mongoose = require('mongoose');

// Issues

const StepTwoSchema = new mongoose.Schema({
	issueTitle: {
		type: String,
	},
	issueImpactType: {
		type: [String],
		enum: ['low', 'medium', 'high', 'critical'],
	},
	action: {
		type: [String],
		enum: ['immediate', 'hold', 'acceptance'],
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

/*
	bootcamp: {
		type: mongoose.Schema.ObjectId,
		ref: 'Bootcamp',
		required: true, 
	},

    */

module.exports = mongoose.model('StepTwo', StepTwoSchema);
