const router = require('express').Router();
const { Workout } = require('../models');

// Get last workout
router.get('/api/workouts', (req, res) =>{
    Workout.aggregate([
        {$addFields: {
            totalDuration: {
                // Add all exercises
                $sum: '$exercises.duration'
            }
        }}
    ])
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.status(400).json(err);
        });
});

// Add exercise - push into exercise array
router.put('/api/workouts/:id', (req, res) =>{
    console.log(req.body);
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {
            // this will return updated object
            new: true,
            runValidators: true
        }
    )
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
});

// Create workout
router.post('/api/workouts', (req, res) =>{
    Workout.create({})
    .then(data =>{
        res.json(data);
    })
    .catch(err=>{
        res.status(400).json(err);
    });
});

// Get workouts in range
router.get('/api/workouts/range', (req, res) =>{
    Workout.aggregate([
        {$addFields: {
            totalDuration: {
                // Add all exercises
                $sum: '$exercises.duration'
            }
        }}
    ])  
        // Sort by ID in descending order
        .sort({_id: -1})
        // Limit to last 7 workouts
        .limit(7)
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.status(400).json(err);
        });
});

module.exports = router;