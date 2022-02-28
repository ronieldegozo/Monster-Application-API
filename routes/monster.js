const express = require('express');
const router = express.Router();
const { getMonster, createMonster, getMonsterId} = require('../controller/monster');

router.get('/', getMonster);

router.post('/monster', createMonster);

router.get('/monster/:id', getMonsterId);


module.exports = router;