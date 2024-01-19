const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
	institution_name: String,
	degree_level: String,
	field_of_study: String,
	degree_earned: String,
	graduation_year: Number,
	gpa: Number,  // optional
	certifications: [String],  // Array to store multiple certifications
	online_courses: [String],  // Array to store multiple online courses
	project_details: String,  // optional
	language_proficiency: [String],  // Array to store multiple languages, optional
})
const Education = mongoose.model('Education', educationSchema);
const workExperienceSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	jobTitle: {
		type: String,
		required: true
	},
	companyName: {
		type: String,
		required: true
	},
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date
	},
	responsibilities: {
		type: String
	},
	achievements: {
		type: String
	}
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);


const newSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	birthdate: {
		type: Date,
	},
	profileImage: {
		type: String,
	},
	registrationDate: {
		type: Date,
		default: Date.now,
	},
	education: [educationSchema],
	workExperience: [workExperienceSchema]
});
const data = mongoose.model("users", newSchema);
module.exports = data



