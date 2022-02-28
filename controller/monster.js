const Monster = require('../model/Monster');

// FETCH ALL MONSTERS
exports.getMonster =  (req,res,next) =>{

    Monster.find()
        .then((monster)=>{
            res.status(200).json({
                message: 'Monster fetched successfully',
                monster
            })
        })
        .catch((err)=>{
            console.log(err);
        })
};

//CREATE MONSTER
exports.createMonster = (req,res,next) =>{    
    const monster = req.body.monster;
    const description = req.body.description;
    console.log('monstername', monster,description);

    const monsterdata = new Monster({
        monster: monster,
        description: description
    })
    monsterdata.save()
        .then((result)=>{
            res.status(201).json({
                message: 'Monster created successfully',
            })
        })
        .catch((err)=>{
            console.log(err);
        })
};

//FETCH SPECIFIC MONSTER
exports.getMonsterId = (req,res,next) =>{
    const monsterId = req.params.id;

    Monster.findById(monsterId)

    .then((monster)=>{
        console.log(monster)
        res.status(200).json({
            message: 'Monster fetched successfully',
            monster
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}