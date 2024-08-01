const express = require('express');

var router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);

router.get('/create', function(req, res, next){

    if(['vethuong', 'vevip'].includes.req.query.ticket) return next();
    res.status(404).json({message: 'Access denied !!'})

}, courseController.create);

router.post('/handle-form-action', courseController.handleFormAction);

router.get('/:id/edit', courseController.edit);


router.put('/:id', courseController.update);


router.patch('/:id/restore', courseController.restore);

router.delete('/:id/force', courseController.forceDestroy);

router.delete('/:id', courseController.destroy);

router.get('/:slug', courseController.show);

module.exports = router;
