const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

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
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
require('./models/exercise.model');
require('./models/user.model');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server: listening port: ${port}...`);
});
