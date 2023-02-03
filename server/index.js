const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const https = require('https'),
	fs = require('fs'),
	helmet = require('helmet');

const connectDB = require('./config/db.js');

// load env variables
dotenv.config({ path: './config/config.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

//connection database

connectDB();

// Route Files
// Authentications
const auth = require('./routes/auth');
// issues
const stepTwo = require('./routes/steps/stepTwo');
//feelings
const stepThree = require('./routes/steps/stepThree');
//tags
const stepFour = require('./routes/steps/stepFour');
//acttions
const stepFive = require('./routes/steps/stepFive');
//contacts
const stepSix = require('./routes/steps/stepSix');
//thoughts
const stepSeven = require('./routes/steps/stepSeven');
//tags
const stepEight = require('./routes/steps/stepEight');
//goals
const stepNine = require('./routes/steps/stepNine');
//tags
const stepTen = require('./routes/steps/stepTen');
//benefits
const stepEleven = require('./routes/steps/stepEleven');

// versions
const versions = require('./routes/versions.js');

// email

const email = require('./routes/email.js');

// Mount Routes

// Authentication
app.use('/api/v1/auth', auth);

// issues
app.use('/api/v1/stepTwoIssues', stepTwo);
//feelings
app.use('/api/v1/stepThreeFeelings', stepThree);
//tags
app.use('/api/v1/stepFourTags', stepFour);
//actions
app.use('/api/v1/stepFiveActions', stepFive);
//contacts
app.use('/api/v1/stepSixContacts', stepSix);
//thoughts
app.use('/api/v1/stepSevenThoughts', stepSeven);
//tags
app.use('/api/v1/stepEightTags', stepEight);
//goals
app.use('/api/v1/stepNineGoals', stepNine);
//tags
app.use('/api/v1/stepTenTags', stepTen);
//benefits
app.use('/api/v1/stepElevenBenefits', stepEleven);
// mounting versions
app.use('/api/v1/versions', versions);

app.use('/api/v1/email', email);

app.use(errorHandler);

// testings github///

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log('server is running at PORT: 5000');
});

app.get('/', (req, res) => {
	res.send('welcome to backend of my therapy tool');
});

// Dev debugging mode
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	// Close server & exit process
	server.close(() => process.exit(1));
});
