const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            url: req.body.url,
            caption: req.body.caption || 'No caption',
            user_id: req.session.user_id,
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;