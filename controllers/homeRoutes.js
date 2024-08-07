const router = require("express").Router();
const { Username, Post , Comment } = require("../models");

// Render home page
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        { model: Username, attributes: ['username'] },
        { model: Comment, include: [{ model: Username, attributes: ['username'] }] },
      ],
      order: [["createdAt", "DESC"]],
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Sign In
router.get('/signin', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signin');
});

// Sign Up
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
