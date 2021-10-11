// Set up routes for workouts
const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes.js');

// Define route for workoutRoutes
router.use('/api/workouts', workoutRoutes);

module.exports = router;