const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

const keys = require('./config/keys');

mongoose.connect('mongodb://ds233769.mlab.com:33769/emaily-dev', {
  user: keys.mongoUsername,
  pass: keys.mongoPassword
});

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);