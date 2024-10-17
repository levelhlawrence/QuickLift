import mongoose from "mongoose";

const driveSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  passPhrase: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Driver = mongoose.model("Driver", driveSchema);

export default Driver;
