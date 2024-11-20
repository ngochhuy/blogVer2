const express = require('express');
const path = require('path');
const eprhandle = require('express-handlebars');

const morgan = require('morgan');
const app = express();
const port = 3000;
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
//template engine
app.engine('hbs',eprhandle.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));



app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`listening port ${port}`);
    
})