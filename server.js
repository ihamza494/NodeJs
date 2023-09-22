const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const friendsRouter = require('./routes/friends.routers');
const messageRouter = require('./routes/messages.routers');

app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));
//middleware
app.use((req,res, next)=>{
    const start = Date.now();
    console.log(`${req.method} ${req.baseUrl} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`total time taken ${delta}ms`);

});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index',{
        title: "KASHMIR DIARIES",
        caption: "Candid on reaching arang kel after 2 hours of hiking."
    })
})

app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);


// app.get('/',(req,res)=>{
//     res.send('Home Page');
// });

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
})