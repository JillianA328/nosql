const router = require('express').Router();
const thoughtsRoutes = require('./api/thoughts-routes');
const userRoutes = require('./api/user-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
