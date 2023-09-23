const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Tour = require("../models/tourModel");
const User = require("../models/userModel");
const Review = require("../models/reviewModel");
const Comment = require("../models/commentModel");

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.connect( DB, { 
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true
}).then(con => {
  // console.log(con.connections);
  console.log('DB connection successful');
})

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users-test.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews-test.json`, 'utf-8')); 
const comments = JSON.parse(fs.readFileSync(`${__dirname}/comments-test.json`, 'utf-8')); 

//IMPORT DATA INTO BD
const importData = async() => {
  try{
    // await Tour.create(tours, {validateBeforeSave: false});
    // await User.create(users, {validateBeforeSave: false}); 
    // await Review.create(reviews, {validateBeforeSave: false}); 
    // await Comment.create(comments, {validateBeforeSave: false}); 

    console.log('Data successfully loaded')
  } catch (err){
    console.log(err)
  }
  process.exit(); 
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async() => {
  try{
    // await Tour.deleteMany();
    // await User.deleteMany();
    // await Review.deleteMany();
    // await Comment.deleteMany();

    console.log('Data successfully deleted')
  } catch (err){
    console.log(err)
  }
  process.exit(); 
};

if(process.argv[2] === '--import'){ 
  importData()
} else if (process.argv[2] === '--delete'){
  deleteData();
}
// console.log(process.argv); 
// node dev-data/import-dev-data.js --delete
// node dev-data/import-dev-data.js --import