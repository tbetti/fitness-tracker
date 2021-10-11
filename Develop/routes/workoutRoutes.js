const router = require('express').Router();
const { Workout } = require('../models');

// Get last workout
router.get('/', (req, res) =>{
    Workout.find()
        .populate('exercises')
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.status(400).json(err);
        });
});

// // Add exercise
// router.put('/:id');

// Create workout
router.post('/', ({body}, res) =>{
    Workout.insert(body)
    .then(data =>{
        res.json(data);
    })
    .catch(err=>{
        res.status(400).json(err);
    });
});

// // Get workouts in range
// router.get('/range');

module.exports = router;