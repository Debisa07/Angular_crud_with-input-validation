const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: {
    type: Schema.Types.UUID,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  dependant: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: { type: Schema.Types.ObjectId, ref: "department" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,  // Default value for deletedAt (null if not deleted)
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
