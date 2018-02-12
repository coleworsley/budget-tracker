const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const checkAuth = controllers.auth.checkAuth;

// router.get('/[version]/[route]', controllers[route]);
router.post('/v1/auth', controllers.auth.generateToken);

module.exports = router;
