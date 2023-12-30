const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  id: {
    type: Schema.Types.UUID,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
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

module.exports  =  mongoose.model("Department", departmentSchema);
