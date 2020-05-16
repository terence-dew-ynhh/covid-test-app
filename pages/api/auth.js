require('dotenv').config()
import passport from 'passport';


passport.use(
  new (require('passport-cas').Strategy)(
    {
      ssoBaseURL: process.env.AUTH_SSO,
      serverBaseURL: process.env.AUTH_SERVER,
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