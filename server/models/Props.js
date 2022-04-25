const mongoose = require("mongoose");

const PropSchema = new mongoose.Schema({
    material: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    location: {
        type: String,
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