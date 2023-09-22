const path = require('path');

function postMessages(req,res){
    console.log('updating massages....');
};

function getMessages(req, res){
    res.render('messages', {
        title: "My Friends",
        friend: "PERSHOTAM"
    })
    //res.sendFile(path.join(__dirname, ".","public","images","Hamza.jpg"));
}

module.exports={
    postMessages,
    getMessages
};