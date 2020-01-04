const resErr = require('../services/responseError');

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('ERR: ', err));
});

// ADD new exercise
router.route('/add').post((req, res) => {
  const {
    username,
    description,
    duration = Number(req.body.duration),
    date = Date.parse(req.body.date)
  } = req.body;

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() =>
      res.json(`Exercise: ${description} for user: ${username} - added!`)
    )
    .catch(err => resErr(err, res));
});

// Get an exercise
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => resErr(err, res));
});

//DELETE exercise
router.route('/:id').delete((req, res) => {
  Exercise.findOneAndDelete(req.params.id)
    .then(() => res.json('Exercise  been deleted'))
    .catch(err => resErr(err, res));
});

// UPDATE exercise
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      const { username, description, duration, date } = req.body;
      exercise.username = username;
      exercise.description = description;
      exercise.duration = Number(duration);
      exercise.date = Date.parse(date);

      exercise
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => resErr(err, res, 400, 'UPDATE'));
    })
    .catch(err => resErr(err, res));
});

module.exports = router;
