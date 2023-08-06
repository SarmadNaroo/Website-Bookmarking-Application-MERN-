const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ead').then(() => {console.log("connected")}).catch((err) => { console.log(err); });

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const Sites = require('./models/Sites');

app.get('/sites', async(req, res) => {
    const sites = await Sites.find();
    res.json(sites);
});

app.post('/site/save', async(req, res) => {
    const add = await Sites.create(req.body);
    if(!add){
        return res.json({ error: 'Error during site creation'});
    }
    return res.json({message: 'Site created successfully'});
});


app.put('/site/update/:id', async(req, res) => {
    const id = req?.params?.id;
    const {visited} = req.body;

    const site = await Sites.findByIdAndUpdate(id, {visited}, {new: true});
    if(!site){
        return res.json({ error: 'Error during site update'});
    }
    return res.json({message: 'Site updated successfully'});
});

app.get('/sites/visited', async(req, res) => {
    const visited = await Sites.find({visited: true});
    if(!visited){
        return res.json({ error: 'Error during site update'});
    }
    return res.json(visited);
});

app.delete('/site/delete/:id', async(req, res) => {
    const id = req?.params?.id;
    const site = await Sites.findByIdAndDelete(id);
    if(!site){
        return res.json({ error: 'Error during site deletion'});
    }
    return res.json({message: 'Site deleted successfully'});
});


app.listen(3002, () => {
    console.log('Server running on port 3002');
});