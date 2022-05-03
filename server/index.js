const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PropModel = require('./models/Props');
const CostumeModel = require('./models/Costumes');
const UserModel = require('./models/Users');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Everett:dazkir-7vykre-bimVon@cluster0.tkewu.mongodb.net/BackStageSupplies?retryWrites=true&w=majority");

//prop routes
app.get("/getProps", (req, res) => {
    PropModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createProp", async (req, res) => {
    const prop = req.body;
    const newProp = new PropModel(prop);
    await newProp.save();

    res.json(prop);
});

app.put('/updateProp', async (req, res) => {
    const newProp = req.body.newName
    const id = req.body.id

    try {
        await PropModel.findById(id, (error, propToUpdate) => {
            propToUpdate.name = newName;
            propToUpdate.save()
        })
    } catch (err) {
        console.log(err)
    }

});

//costume routes
app.get("/getCostumes", (req, res) => {
    CostumeModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.delete('/deleteProp:id', async (req,res) => {
    const id = req.params.id;
    await PropModel.findByIdAndRemove(id).exec();
    res.send('itemdleted');
})

app.post("/createCostume", async (req, res) => {
    const costume = req.body;
    const newCostume = new CostumeModel(costume);
    await newCostume.save();

    res.json(costume);
});

//user routes
app.get("/getUsers", (req,res) => {
    UserModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(costume);
    await newUser.save();

    res.json(user);
});




//server
app.listen(8000, () => {
    console.log("Server runnin!");
})
