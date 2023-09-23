const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true, 
    },
    slug: String,
    // nr: String,
    type: {
      type: String,
    },
    island: {
      type: String,
    },
    //SELECT
    cardLarge: { type: String },
    cardMedium: { type: String },
    cardSmall: { type: String },
    //CARD LARGE
    cardLargeImgUrl1400: [String],
    cardLargeImgUr800: [String],
    cardLargeDescription: { type: String },
    cardDifficultyImageUrl: { type: String },

    imageCover: {
      type: String, 
    },

    days: { 
      type: Number,
    },
    startDates: [Date],
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'], 
      max: [5, 'Rating must be below 5.0'], 
      set: val => Math.round(val * 10)/ 10,
    },
    ratingQuantity: {
      type: Number,
      default: 0
    },
    startAndEndPoint: { type: String }, 
    stops: [String],
    stopPoints: [String],
    mapCenterCoordinates: [Number],
    mapZoom: Number,
    mapLocations: [
      {
        description: String,
        coordinates: [Number]
      }
    ],
    keywords: [String],
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    minGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    sleeping: {
      type: String
    },
    languages: [String],
    food:{
      type: String
    },
    price: {
      type: Number,
      // required: [true, 'A tour must have a price']
    },
    description: {
      type: String
    },
    descriptionCheckPoints: [String],
    createAt: {
      type: Date, 
      default: Date.now(), 
      select: false, 
    },
  },
  { 
  toJSON: { virtuals: true},
  toObject: { virtuals: true},
  }
);

//VIRTUAL POPULATE
tourSchema.virtual('users', {
  ref: 'User', 
  foreignField: 'user', 
  localField: '_id', 
});

tourSchema.virtual('reviews', {
  ref: 'Review', 
  foreignField: 'tour', 
  localField: '_id', 
});

tourSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'tour',
  localField: '_id',
})

//DOCUMENT MIDDLEWWARE
tourSchema.pre('save', function (next){
  this.slug = slugify(this.name, {lower: true}); 
  
  next(); 
});

const Tour = mongoose.model('Tour', tourSchema); 

module.exports = Tour;