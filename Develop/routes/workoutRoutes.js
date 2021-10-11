const router = require('express').Router();
const { Workout, Exercise } = require('../models');

// Get all workouts
router.get('/', (req, res) =>{
    Workout.find()
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.status(400).json(err);
        });
});

// // Create a new workout
// router.post('/');

// // Edit a workout
// router.put('/:id');

// // Get a range of workouts
// router.get('/range');

module.exports = router;