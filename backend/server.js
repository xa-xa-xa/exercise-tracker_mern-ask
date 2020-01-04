const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// DB endpoint
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connect = mongoose.connection;
connect.once('open', () => console.log('MongoDB connected...'));

app.use(cors());
app.use(bodyParser.json());

// Routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
require('./models/exercise.model');
require('./models/user.model');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server: listening port: ${port}...`);
});
