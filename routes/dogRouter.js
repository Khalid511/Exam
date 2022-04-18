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
})
.post((req, res, next) => {
    Dogs.create(req.body)
    .then((dog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dogs');
})
.delete((req, res, next) => {
    Dogs.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
dogRouter.route('/:dogid')
.get((req, res, next) => {
    Dogs.findById(req.params.dogid)
    .then((dog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dogs/'+req.params.dogid);
})

.put((req, res, next) => {
    Dogs.findByIdAndUpdate(req.params.dogid, {
        $set: req.body
    }, {new: true})
    .then((dog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));

})
.delete((req, res, next) => {
    Dogs.findByIdAndRemove(req.params.dogid)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

dogRouter.route('/{dogname}')
.get((req, res, next) => {
    Dogs.findById(req.params.dogname)
    .then((dog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dogs/'+req.params.dogid);
})

.put((req, res, next) => {
    Dogs.findByIdAndUpdate(req.params.dogname, {
        $set: req.body
    }, {new: true})
    .then((dog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));

})
.delete((req, res, next) => {
    Dogs.findByIdAndRemove(req.params.dogname)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = dogRouter;