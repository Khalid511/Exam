const express = require('express');
const bodyParser = require('body-parser');
const  Dogs = require('../models/dogs');
const dogRouter = express.Router();

dogRouter.route('/')
.get((req, res, next) => {
    Dogs.find({})
    .then((dog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = dogRouter;