const mongoose = require('mongoose');

//process.env.MONGO_URI
//const connectionString =
('mongodb+srv://cardinalvision:7uOhzGxzQEAKocAF@cluster0.vur24.mongodb.net/myTherapyTool?retryWrites=true&w=majority');
const connectionString =
	'mongodb+srv://basit740:admin1122@bobisoftprojects.ljxbi.mongodb.net/myTherapyTool?retryWrites=true&w=majority';
const connectDB = async () => {
	const conn = await mongoose.connect(connectionString, {
		//mongodb+srv://basit740:admin1122@bobisoftprojects.ljxbi.mongodb.net/myTherapyTool?retryWrites=true&w=majority
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
