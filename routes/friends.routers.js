const express = require('express');
const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req,res, next)=>{
    console.log('ip address :',req.ip);
    next();
})

friendsRouter.post('/', friendsController.addFriend);
friendsRouter.get('/', friendsController.getFriendsList);
friendsRouter.get('/:friendId', friendsController.getFriendById);


module.exports = friendsRouter;