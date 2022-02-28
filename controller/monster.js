const Monster = require('../model/Monster');
// FETCH ALL MONSTERS
exports.getMonster =  async(req,res,next) =>{
    try{
        const monster = await Monster.find();
        res.status(200).json({
            message: 'Monster fetched successfully',
            monster
        })
    }
    catch(e){
        console.log(e);
    }
};

//CREATE MONSTER
exports.createMonster =async (req,res,next) =>{    
    try{
        const monster = req.body.monster;
        const description = req.body.description;
        // console.log('monstername', monster,description);
        const monsterdata = new Monster({
            monster: monster,
            description: description
        })
        const newMonster = await monsterdata.save();
            res.status(201).json({
                message: 'Monster created successfully',
                newMonster
            })
    }
    catch(e){
        console.log(e);
    }
};

//FETCH SPECIFIC MONSTER
exports.getMonsterId = async (req,res,next) =>{
    try{
        const monsterId = req.params.id;
        const monsterDataId = await Monster.findById(monsterId);
        res.status(200).json({
            message: `Monster with the name of ${monsterDataId.monster} fetched successfully`,
            monsterDataId
        })
    }catch(e){
        console.log(e);
    }
};

exports.deleteMonster =  async (req,res,next) => { 
    try{
        const monsterId = req.params.id;
        const monsterDataId = await Monster.findById(monsterId);
        await Monster.findByIdAndDelete(monsterId);
        res.status(200).json({
            message: `Monster with the name of ${monsterDataId.monster} deleted successfully`,
            monsterDataId
        })
    }catch(e){
        console.log(e);
    }
};