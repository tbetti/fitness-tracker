// Import packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

// Connect to packages
const app = express();
const PORT = process.env.PORT || 3001;
app.use(morgan("dev"));

// Set middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Connect backend and front end
app.use(express.static('public'));
app.use(apiRoutes);
app.use(viewRoutes);

// Connect to mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
        useNewUrlParser: true,
        useFindAndModify: false
    },
);

// Connect to port
app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
});