const router = require('express').Router();
const { Workout } = require('../models');

// Get last workout
router.get('/', (req, res) =>{
    Workout.find()
        .then(data =>{
            res.json(data);
        })
        .catch(err =>{
            res.status(400).json(err);
        });
});

// Add exercise - push into exercise array
router.put('/:id', (req, res) =>{
    console.log(req.body);
    Workout.updateOne(
        {_id: req.params.id},
        {$push: {exercises: req.body}}
    )
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
});

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