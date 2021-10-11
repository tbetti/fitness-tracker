const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const WorkoutSchema = new Schema({
    day:{
        type: Date,
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Excercise"
    }]
});
// Connect schema to Workout model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;