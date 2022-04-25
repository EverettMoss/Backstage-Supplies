const mongoose = require("mongoose");

const PropSchema = new mongoose.Schema({
    material: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
});

const PropModel = mongoose.model("Props", PropSchema)
module.exports = PropModel;