const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyparser = require('body-parser')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/w2d4', {useMongoClient:true});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length");
    next();
});

const productSchema = new mongoose.Schema({
    name : String,
    description: String,
    price: Number,
    condition: Number,
    category: String
});

const Product = mongoose.model('product', productSchema);

// const product = new Product({name: 'Iphone X', description: 'Smartphone designed by apple.', price: 999, condition: 0, category: 'Mobile Device'})
// product.save((err, product)=>{
//     if(err) return console.error(err);
//     console.log(product.name + " is successfully created!")
// })

app.get('/products', (req, res) => {
    Product.find((err, products)=>{
        if(err) return console.error(err);
        res.json(products);
        });
    });

app.delete('/delete/:id', (req, res)=>{
    Product.remove({_id: req.params.id}, (err)=>{
        if(err) return console.error(err);
        console.log(req.params.id + ' is successfully removed!')
        res.end();
    })
})

app.post('/create', (req, res)=>{
    console.log(req.body);
    const product = new Product(req.body);
    product.save((err, product)=>{
        if(err) return console.error(err);
        console.log(product._id + " is successfully created!")
        res.json(product._id);
    })

})

app.listen(8080, ()=>console.log('Running on 8080'));