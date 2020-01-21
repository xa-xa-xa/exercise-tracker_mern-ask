const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// DB endpoint
const uri = process.env.DATABASE_URI;
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
const exercisesRouter = require('./backend/routes/exercises');
const usersRouter = require('./backend/routes/users');
require('./backend/models/exercise.model');
require('./backend/models/user.model');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.listen(port, () => {
  console.log('Environment:', process.env.NODE_ENV);
  console.log(`Server: listening port: ${port}...`);
});
