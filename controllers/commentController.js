const Comment = require('../models/commentModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync')

exports.getAllComments = catchAsync(async( req, res, next) => {

  let filter = {};
  if ( req.params.tourId) filter = { tour: req.params.tourId}

  if ( req.params.userId) filter = { user: req.params.userId}

  const comments = await Comment.find(filter); 

  res.status(200).json({
    status: 'success',
    data: {
      comments
    }
  })
});

exports.setTourUserIds = (req, res, next) => {
  //Allow nested routes
  if(!req.body.tour) req.body.tour = req.params.tourId;
  if(!req.body.user) req.body.user = req.user.id; 
  next();
}

exports.getComment = factory.getOne(Comment);
exports.createComment = factory.createOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
