const model = require('../models/friends.model');

function getFriendById(req, res){
    const friendId = req.params.friendId;
    const friend =model[friendId];
    if(friend){
        res.status(200).json(friend);
    }
    else{
        res.status(404).json({
            error: "Friend does not exist."
        })
    }
};

function getFriendsList(req,res){
    res.json(model);
}

function addFriend(req, res){
    if(!req.body.name){
        return res.status(400).json({
            error: 'Friend name missing!'
        })
    }
    const newFriend = {
        name : req.body.name,
        id: model.length
    };
    model.push(newFriend);
    res.json(newFriend);
};


module.exports={
    getFriendById,
    getFriendsList,
    addFriend
}

