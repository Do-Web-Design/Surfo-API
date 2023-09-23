const path = require('path'); 
const fs = require('fs');

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const commentRouter = require('./routes/commentRoutes');
const bookmarkRouter = require('./routes/bookmarkRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController');

const viewRouter = require('./routes/viewRoutes');

// Init Express
const app = express();

app.enable('trust proxy'); 

app.use(cors({
  // origin:'http://localhost:3000',
  // origin:'http://127.0.0.1:8080',
  // // origin:'https://do-web-design.github.io',
  // credentials:true
}
));





// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });







app.use(
  helmet({
    crossOriginEmbedderPolicy: false
  })
);
// DEVELOPMENT LOGIN
if( process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
//LIMIT REQUESTS 
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000, 
  message: 'Too many requests from this IP. please try again in an hour'
});

app.use('/api', limiter); 
// BODY PARSER, READING DATA FROM THE BODY INTO REQ.BODY
app.use(express.json({ 
  limit: '10kb' 
})); 
app.use(cookieParser()); 

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies)
  next()
})

app.use(mongoSanitize());
app.use(xss()); 
app.use(compression());

// ROUTERS
app.use('/', viewRouter)

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/bookmarks', bookmarkRouter);
app.use('/api/v1/booking', bookingRouter);

app.all('*'), (req, res, next) => {
  next ( new AppError ( `Can not find ${req.originalUrl} on this server`, 404));
};

app.use(globalErrorHandler);

module.exports = app;
