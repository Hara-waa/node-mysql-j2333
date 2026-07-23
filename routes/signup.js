const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  res.render('signup', {
    title: 'Sign up',
    isAuth: isAuth,
  });
});

module.exports = router;
