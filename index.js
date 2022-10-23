const express = require('express');
const port = 8080;
const app = express();

//setting view engine to ejs
app.set('view engine', 'ejs');
app.set('views','./views')

//Use middleware
app.use(express.urlencoded());

//To use static files
app.use(express.static('assets'));

//Use express router for home page
app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log("Error in running surver ",err);
        return;
    }
    console.log(`App is running on port number : ${port}`);
})