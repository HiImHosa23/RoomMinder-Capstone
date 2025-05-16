const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dev:Nc210960870@cluster0.peco6ve.mongodb.net/roommatesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas!'))
    .catch(err => console.error('MongoDB connection error:', err));


const roommateSchema = new mongoose.Schema({
    name: String,
    likes: [String],
    dislikes: [String],
    expectations: String, 
    contact: String,
    imageURL: String
});

const Roommate = mongoose.model('Roommate', roommateSchema);

app.get('/api/roomates', async (req, res) => {
    try{
        const roomies = await Roommate.find();
        res.json(roomies);
    } catch(error){
        res.status(500).json({message: 'There was an error fetching this roommate'});
    }
});

app.post('/api/roommates', async (req, res) => {
    try{
        const newRoomie = new Roommate(req.body);
        await newRoomie.save();
        res.status(201).json(newRoomie);
    } catch(error){
        res.status(400).json({message: 'There was an error saving this roommate'});
    }
});

app.listen(PORT, () => {
    console.log(`The server is runnig on localhost:${PORT}!`);
})

