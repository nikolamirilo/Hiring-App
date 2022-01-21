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
  yearsOfExperience: String,
  nativeLanguage: String,
  linkedInUrl: String,
  hireStatus: Boolean,
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
