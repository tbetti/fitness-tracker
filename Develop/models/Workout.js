const Schema = require('mongoose').Schema;

const WorkoutSchema = new Schema({
    day:{
        type: Date,
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Excercise"
    }]
});

module.exports = Workout;