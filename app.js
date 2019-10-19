// const express = require('express');
// const path = require('path');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const app = express();


// require('./api/models/db');
// require('./api/config/passport');

// app.use(passport.initialize());
// app.use('/api', routesApi);

require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

const rtsIndex = require('./routes/index.router');

// middleware

app.use('/api', rtsIndex);

// middleware
app.use(bodyParser.json());
app.use(cors());

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));