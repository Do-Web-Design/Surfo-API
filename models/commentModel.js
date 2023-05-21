const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, 'Comment can not be empty']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      require: [true, 'Comment must belong to a tour']
    },
    user : {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      require: [true, 'Comment must belong to a user']
    }
  },
  {  
    toJSON: { virtuals: true},
    toObject: { virtuals: true},
  }
)

commentSchema.pre(/^find/, function(next){
  this.populate({ 
    path: 'tour',
    select: 'name'
  }).populate({ 
    path: "user",
    select: 'name photo' 
  });

  next()
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
