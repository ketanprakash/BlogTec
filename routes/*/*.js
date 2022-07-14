const express = require('express');
const notFound = require('../../controllers/notFound/notFound');
const router = express.Router();

router.get('*', notFound);

module.exports = router;