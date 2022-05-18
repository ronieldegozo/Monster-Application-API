const express = require('express');
const router = express.Router();
const {getMonsterStart, getMonster, createMonster, getMonsterId, updateMonster, deleteMonster} = require('../controller/monster');
//get index
router.get('/', getMonsterStart);

//get all monster data
router.get('/monsters', getMonster);

//creating monster
router.post('/monster', createMonster);

//fetching specific monster
router.get('/monster/:id', getMonsterId);

//updating monster
router.put('/monster/:id', updateMonster);

//delete specific monster
router.delete('/monster/:id', deleteMonster);


module.exports = router;