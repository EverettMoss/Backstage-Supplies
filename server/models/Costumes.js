const mongoose = require("mongoose");
const UserModel = require("./Users");

const CostumeSchema = new mongoose.Schema({
    picture: {
        type: String,
        required: false
    },
    clothingType: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    itemCode: {
        type: String,
	    required: false
    },
    checkedOutBy: {
        type: UserModel,
        required: false
    },
    size: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    timePeriod: {
        type: String,
        required: false
    },
    material: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    useLogs: {
        type: String,
        required: false
    },
    lastCleaned: {
        type: Date,
        default: new Date(),
        required: false
    },
    mending: {
        type: String,
        required: false
    },
    toDO: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
});

const CostumeModel = mongoose.model("Costumes", CostumeSchema)
module.exports = CostumeModel;
