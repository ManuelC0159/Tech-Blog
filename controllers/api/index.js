const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routers.js');
const commentRoutes = require('./commment-routes.js');


router.use('./users', userRoutes);
router.use('./posts', postRoutes);
router.use('./comments', commentRoutes);

module.exports = router;