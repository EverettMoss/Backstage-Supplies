const mongoose = require("mongoose");
const UserModel = require("./Users");

const PropSchema = new mongoose.Schema({
    material: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    itemCode: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    checkedOutBy: {
        type: UserModel,
        required: false,
    },
    location: {
        type: String,
        required: false
    },
    propType: {
        type: String,
        required: false
    },
    lastCleaned: {
        type: Date,
        default: new Date(),
        required: false
    },
    useLog: {
        type: String,
        required: false
    },
    mendingLog: {
        type: String,
        required: false
    },
    toDo: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
});

const PropModel = mongoose.model("Props", PropSchema)
module.exports = PropModel;
