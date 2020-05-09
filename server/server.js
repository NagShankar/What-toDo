const path = require('path'); //this is built in, no need to install any plugin
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public'); //public directory // '..' is up a folder 

const port = process.env.PORT || 3000; //use automatic PORT set by heroku if its running on heroku, else fall back to local machine 3000

app.use(express.static(publicPath)); //telling express to serve up public directory

//if the requested file by the user is not present in public folder then give them back the index.html folder
app.get('*', (req,res)=>{
   res.sendFile(path.join(publicPath, 'index.html'));    
})


//start server for heroku or local running
app.listen(port, ()=>{
    console.log('server is up')
})