const Bookmark = require('../models/bookmarkModel');
const factory = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  //Allow nested routes
  if(!req.body.tour) req.body.tour = req.params.tourId;
  if(!req.body.user) req.body.user = req.user.id; 
  next();
}

exports.getAllBookmark = factory.getAll(Bookmark);
exports.getBookmark = factory.getOne(Bookmark);
exports.createBookmark = factory.createOne(Bookmark);
exports.updateBookmark = factory.updateOne(Bookmark);
exports.deleteBookmark = factory.deleteOne(Bookmark);
