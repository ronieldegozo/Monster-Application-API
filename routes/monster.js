const express = require('express');
const router = express.Router();
const { getMonster, createMonster, getMonsterId, deleteMonster} = require('../controller/monster');

router.get('/', getMonster);

router.post('/monster', createMonster);

router.get('/monster/:id', getMonsterId);

router.delete('/monster/:id', deleteMonster);


module.exports = router;