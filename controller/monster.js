const Monster = require('../model/Monster');

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

    // res.json([
    //     {
    //        id: 1,
    //        monster: 'Roniel'
    //     },
    //     {
    //         id: 2,
    //         monster: 'Rogine'
    //     },
    //     {
    //         id: 3,
    //         monster: 'Samber'   
    //     },
    //     {
    //         id: 4,
    //         monster: 'Mon Amore'   
    //     },
    //     {
    //         id: 5,
    //         monster: 'Love'   
    //     }
    // ])
};

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


    // res.status(201).json({ //201 SUCCESS WAS RESOURCES IS CREATED
    //     message: 'POST HAS BEEN CREATED',
    //     post: {
    //         id: new Date().toISOString(),
    //         monstername: monstername,
    //         description: description
    //     }
    // });
};