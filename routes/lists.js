const express = require('express');
const router = express.Router();

const lists_controller = require('../controllers/listsController');

router.get("/", lists_controller.list_create_get);
router.get('/:id', lists_controller.list_detail);

module.exports = router;