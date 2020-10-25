const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const studentRoutes = require('./student.route');
const titlenameRoutes = require('./titlename.route');
const epnameRoutes = require('./epname.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/student', studentRoutes);
router.use('/addtitlename', titlenameRoutes);
router.use('/epname', epnameRoutes)

module.exports = router;
