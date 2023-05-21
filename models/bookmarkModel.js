const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema(
  {
    bookmark: {
      type: Boolean,
      required: [true, 'Bookmark can not be empty']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      require: [true, 'Bookmark must belong to a tour'],
      unique: true,
    },
    user : {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      require: [true, 'Bookmark must belong to a user']
    }
  },
  { 
    toJSON: { virtuals: true},
    toObject: { virtuals: true},
  }
)

bookmarkSchema.index({ tour: 1 },{ unique: true});

bookmarkSchema.pre(/^find/, function(next){
  this.populate({ 
    path: 'tour', 
    select: 'name imageCover days island'
  }).populate({ 
    path: "user",
    select: 'name' 
  });

  next()
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
