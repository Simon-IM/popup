const express = require('express');

const eventController = require('../controllers/controllers');

const router = express.Router();

router.get('/', eventController.findAllEvents, (req, res) => {
    res.status(200).json(res.locals.events);
});


module.exports = router;