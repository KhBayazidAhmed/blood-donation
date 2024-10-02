import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  mobile: {
    type: String,
    required: [true, "Please provide a mobile number"],
    unique: true,
  },
  location: {
    type: String,
    required: [true, "Please provide a location"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Please provide a blood group"],
  },
  division: {
    type: String,
    required: [true, "Please provide a division"],
  },
  district: {
    type: String,
    required: [true, "Please provide a district"],
  },
  upazila: {
    type: String,
    required: [true, "Please provide an upazila"],
  },
});

export default mongoose.models.Person || mongoose.model("Person", PersonSchema);
