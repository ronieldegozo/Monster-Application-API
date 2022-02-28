const express = require('express');
const router = express.Router();
const { getMonster, createMonster } = require('../controller/monster');

router.get('/', getMonster);

router.post('/monster', createMonster);


module.exports = router;