const sendEmail = require('../utils/sendEmail');
exports.sendEmail = async (req, res, next) => {
	const info = await sendEmail(req.body);

	res.status(200).json({
		success: true,
		data: info,
	});
};
