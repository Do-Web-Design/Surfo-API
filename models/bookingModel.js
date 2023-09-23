const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      require: [true, 'Booking must belong to a tour'],
      // unique: true,
    },
    user : {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      require: [true, 'Booking must belong to a user']
    },
    travelers: {
      type: Number,
      require: true,
    },
  },
  { 
    toJSON: { virtuals: true},
    toObject: { virtuals: true},
  }
)

// bookingSchema.index({ tour: 1 },{ unique: true});

bookingSchema.pre(/^find/, function(next){
  this.populate({ 
    path: 'tour', 
    select: 'name imageCover days island price'
  }).populate({ 
    path: "user",
    select: 'name' 
  });

  next()
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
