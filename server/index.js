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

app.put('/updateprop/:id', async (req,res) => {
    const updatedProp = await PropModel.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedProp
            }
          })
    }catch(err){
        console.log(err)
    }
})


app.delete('/deleteprop/:id', (req, res) => {
    PropModel.findByIdAndDelete(req.params.id)
      .then(() => res.json('deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
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

app.post("/createCostume", async (req, res) => {
    const costume = req.body;
    const newCostume = new CostumeModel(costume);
    await newCostume.save();

    res.json(costume);
});

app.put('/updatecostume/:id', async (req,res) => {
    const updatedCostume = await CostumeModel.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedCostume
            }
          })
    }catch(err){
        console.log(err)
    }
})

app.delete('/deletecostume/:id', (req, res) => {
    CostumeModel.findByIdAndDelete(req.params.id)
      .then(() => res.json('deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
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
