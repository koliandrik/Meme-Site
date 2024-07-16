const router = require("express").Router();
const { Post, Username } = require("../models");

// Render home page
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Username }],
//      order: [["createdAt", "DESC"]],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
