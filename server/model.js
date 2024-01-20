const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  institutionName: { type: String, required: false },
  degreeLevel: { type: String, required: false },
  startDateSchool: { type: Date, required: false },
  endDateSchool: { type: Date, required: false },
  gpa: { type: Number, required: false },
  certifications: [{ type: String, required: false }],
  onlineCourses: [{ type: String, required: false }],
});
const workExperienceSchema = new mongoose.Schema({
  fresher: { type: Boolean, required: false },
  jobTitle: {
    type: String,
    required: function () {
      return !this.fresher;
    },
  },
  companyName: {
    type: String,
    required: function () {
      return !this.fresher;
    },
  },
  startDateWork: {
    type: Date,
    required: function () {
      return !this.fresher;
    },
  },
  endDateWork: {
    type: Date,
    required: function () {
      return !this.fresher;
    },
  },
  responsibilities: {
    type: String,
    required: function () {
      return !this.fresher;
    },
  },
  achievements: [{ type: String, required: false }],
});

const addressSchema = mongoose.Schema({
  personalAddress: { type: String, required: true },
  pinCode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
});


const newSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location : {addressSchema},
  profileImage: {
    type: String,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  langauges: {
    type: [String],
  },
  profession: {
    type: String,
  },
  education: {educationSchema},
  workExperience : {workExperienceSchema},
});
const data = mongoose.model("users", newSchema);
module.exports = data;
