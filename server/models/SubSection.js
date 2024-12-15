const mongoose = require("mongoose");

const SubSectionSchema = new mongoose.Schema({
	imageUrl: { type: String },
});

module.exports = mongoose.model("SubSection", SubSectionSchema);