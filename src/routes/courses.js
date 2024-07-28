const express = require('express');

var router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);

router.get('/create', courseController.create);

router.put('/:id', courseController.update);

router.get('/:id/edit', courseController.edit);

router.patch('/:id/restore', courseController.restore);

router.delete('/:id/force', courseController.forceDestroy);

router.delete('/:id', courseController.destroy);

router.get('/:slug', courseController.show);

module.exports = router;
