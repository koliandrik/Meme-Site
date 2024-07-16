const router = require('express').Router();
const { Username } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newUsername = await Username.create({
            username: req.body.url,
            password: req.body.caption,
        });
        res.json(newUsername);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.export = router;