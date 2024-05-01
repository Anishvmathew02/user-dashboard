var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('./users/dashboard', {user:true, layout: 'userLayout'});
});
router.get('/recent', function(req, res, next) {
  res.render('./users/recentBookings', {user:true, layout: 'userLayout'});
});
router.get('/membership-card', function(req, res, next) {  
  res.render('./users/membership-card', {user:true, layout: 'userLayout'});
});
router.get('/gym-list', function(req, res, next) {
  res.render('./users/gym-list', {user:true, layout: 'userLayout'});
});
router.get('/gym-detail', function(req, res, next) {
  res.render('./users/gym-detail', {user:true, layout: 'userLayout'});
});

module.exports = router;
