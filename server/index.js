const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PropModel = require('./models/Props');
const CostumeModel = require('./models/Costumes');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Everett:dazkir-7vykre-bimVon@cluster0.tkewu.mongodb.net/BackStageSupplies?retryWrites=true&w=majority");

//prop routes
app.get("/getProps", (req,res) => {
    PropModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});

app.post("/createProp", async (req,res) => {
    const prop = req.body;
    const newProp = new PropModel(prop);
    await newProp.save();

    res.json(prop);
});

//costume routes
app.get("/getCostumes", (req,res) => {
    CostumeModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});

app.post("/createCostume", async (req,res) => {
    const costume = req.body;
    const newCostume = new CostumeModel(costume);
    await newCostume.save();

    res.json(costume);
});


//server
app.listen(8000, () => {
    console.log("Server runnin!");
})
