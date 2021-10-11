// Import packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Connect to packages
const app = express();
const PORT = process.env.PORT || 3001;
app.use(morgan("dev"));

// Set middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Connect to mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", 
    {useNewUrlParser: true}
);

// Connect to port
app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
});