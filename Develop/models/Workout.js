const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const WorkoutSchema = new Schema({
    day:{
        type: Date,
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true, 
            min: 0
        },
        // The following 3 categories are for 'resistance' type exercises only
        weight: {
            type: Number,
            min: 0
        },
        reps: {
            type: Number,
            min: 0
        },
        sets: {
            type: Number,
            min: 0
        },
        // The following category is for 'cardio' type exercises only
        distance: {
            type: Number,
            min: 0
        }
    }]
});
// Connect schema to Workout model
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;