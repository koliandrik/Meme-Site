const router = require('express').Router();
const usernameRoutes = require('express').Router();
const postRoutes = require('express').Router();
const commentRoutes = require('./commentRoutes');

router.use('/posts', postRoutes);
router.user('/usernames', usernameRoutes);
router.use('/comments', commentRoutes);

module.exports = router;