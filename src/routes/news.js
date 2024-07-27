const express = require('express');

var router = express.Router();

const newsController = require('../app/controllers/NewsContrller');

router.get('/:slug', newsController.show);

// newsController.index
router.get('/', newsController.index);

module.exports = router;
