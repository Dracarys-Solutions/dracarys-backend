const mongoose = require("mongoose");
const Fire = new mongoose.Schema(
  {
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    },
    day: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Fire", Fire);
