var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
 res.redirect('/worldfirst');
});

router.get('/auth/google', passport.authenticate( // The route the client makes a request to, to login, in this case the login with Google a tag, in the index.ejs
  'google',
  { scope: ['profile', 'email'] } // our app redirects the user to the google login page, step 2 in the oauth flow diagram
  // In the lesson Oauth Vocabulary, scope, 
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/', // where do you want the client to go after you login 
    failureRedirect : '/' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  // the client can make a request <a href="/logout">logout</a> in your ejs anywhere
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
