import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  location: String,
  profilePicture: String,
  pricePerHour: String,
  technology: String,
  description: String,
  yearsOfExperience: Number,
  nativeLanguage: String,
  linkedInUrl: String,
  //process of hiring
  hireStatus: Boolean, // true if hired, false if not
  startDate: Date,
  endDate: Date,
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
