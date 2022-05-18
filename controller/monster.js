const Monster = require('../model/Monster');

//FETCH INDEX
exports.getMonsterStart =  async (req,res,next) => {
    try {
        res.status(200).json({
            AppName: 'Welcome to Monster App API',
            Developer: 'Mc Roniel De Gozo',
            Version: '1.0.0',
            Endpoints: [
                {
                    Endpoint: '/api/monster',
                    Description: 'Get all monsters',
                    Method: 'GET',
                    Parameters: 'None'
                },
                {
                    Endpoint: '/api/monster/:id',
                    Description: 'Get a single monster',
                    Method: 'GET',
                    Parameters: 'None'
                },
                {
                    Endpoint: '/api/monster',
                    Description: 'Create a monster',
                    Method: 'POST',
                    Parameters: 'None'
                },
                {
                    Endpoint: '/api/monster/:id',
                    Description: 'Update a monster',
                    Method: 'PUT',
                    Parameters: 'None'
                },
                {
                    Endpoint: '/api/monster/:id',
                    Description: 'Delete a monster',
                    Method: 'DELETE',
                    Parameters: 'None'
                }
            ]
        });
    } catch (e) {
        console.log(e);
    }
};

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
        const email = req.body.email;
        const contact = req.body.contact;
        // console.log('monstername', monster,description);
        const monsterdata = new Monster({
            monster: monster,
            description: description,
            email: email,
            contact: contact
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

//UPDATE MONSTER
exports.updateMonster = async (req,res,next) =>{
    try{
        const monsterId = req.params.id;
        const monsterDataId = await Monster.findById(monsterId);
        const monster = req.body.monster;
        const description = req.body.description;
        const email = req.body.email;
        const contact = req.body.contact;
        await Monster.findByIdAndUpdate(monsterId, {
            monster: monster,
            description: description,
            email: email,
            contact: contact
        });
        res.status(200).json({
            message: `Monster with the name of ${monsterDataId.monster} updated successfully`,
            monsterDataId
        })
    }
    catch(e){
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