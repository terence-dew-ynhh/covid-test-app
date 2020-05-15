import passport from 'passport';
const jwt = require('jsonwebtoken');


passport.use(
  new (require('passport-cas').Strategy)(
    {
      ssoBaseURL: 'https://secure.its.yale.edu/cas',
      serverBaseURL: 'http://localhost:3000',
    },
    function (login, done) {

      var netId = login;
      return done(null, netId);
     
    }
  )
);

export default function(req, res, next) {

  passport.authenticate('cas', function (err, user, info) {
    if (err) {
      return console.log(err);
    }

    // const token = jwt.sign({ user }, 'yaleappsecret');
    res.cookie('token', user)
    return res.redirect('/survey');


  })(req, res, next);
};