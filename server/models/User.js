const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'please provide first name'],
	},
	lastName: {
		type: String,
		required: [true, 'please provide last name'],
	},
	email: {
		type: String,
		required: [true, 'please provide email'],
		unique: true,
	},
	username: {
		type: String,
		required: [true, 'please provide username'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'please password for the user'],
		select: false,
	},
	resetCode: String,
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

userSchema.virtual('versions', {
	ref: 'Version',
	localField: '_id',
	foreignField: 'user',
	justOne: false,
});
// Encrypt password using bcryptjs

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return

userSchema.methods.getSignedJwtToken = function () {
	return jwt.sign({ id: this._id }, '23784iusyrjhaskd13hckad', {
		//process.env.JWT_SECRET
		expiresIn: '1d', //process.env.JWT_EXPIRE
	});
};

// Match user entered passwrod to hashed password in db
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// get resetPasswordToken
userSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString('hex');

	// hash token to set to resetPasswordToken field

	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	// set Expire
	this.resetPasswordExpire = Date.now() + 60 * 10 * 1000;
	return resetToken;
};

module.exports = mongoose.model('User', userSchema);
