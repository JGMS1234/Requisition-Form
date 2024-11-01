const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post('/requisition', async (req, res) => {
    const requisition = new Requisition({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    items: req.body.items
    });
    await requisition.save();
    res.json(requisition);
mongoose.connect('mongodb+srv://johnsimwerayi:RnuI06iEBKRx8ekW@cluster0.1jlba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => { console.log('Connected to MongoDB');
 app.listen(3500, () => {console.log('Server is running on port 3500');
 }) }).catch(err => console.log(err));