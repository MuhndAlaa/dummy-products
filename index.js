const express = require('express');
const {products , recent} = require('./products');

// listen to port 5000
const PORT = 5000;

//express app
const app = express();


app.listen(PORT, console.log(`Goto http://localhost:${PORT}`));

//register view engine
app.set('view engine' , 'ejs');

//static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))


//mongoose routes
app.get('/' , (req,res)=>{
    res.redirect('/products')
})

app.get('/products' , (req,res)=>{
    res.send(products)
})


app.get('/recent-products' , (req,res)=>{
    res.send(recent)
})