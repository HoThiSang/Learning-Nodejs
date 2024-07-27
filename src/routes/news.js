const express = require('express');

var router = express.Router();

const newsController = require('../app/controllers/NewsContrller')

router.use('/:slug', newsController.show)

// newsController.index
router.use('/', newsController.index)




module.exports =  router;