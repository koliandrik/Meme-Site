const router = require('express').Router();
const usernameRoutes = require('./usernameRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/posts', postRoutes);
router.use('/users', usernameRoutes);
router.use('/comments', commentRoutes);

module.exports = router;