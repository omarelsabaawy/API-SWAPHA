const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Model/Product');

const MONGODB_URI =
    'mongodb+srv://swapha-app:YGzPJW1MV4AMNZ97@cluster0.h3wkjeo.mongodb.net/test';

const app = express();

app.get('/', (req, res, next) => {
    return res.send('<h1>Hello there this is our graduation project api</h1>');
});

app.get('/api/homeProducts', (req, res) => {
    Product
        .find({ swap: true })
        .then(products => {
            res.send(products)
        })
        .catch(err => { console.log(err); });
});

app.get('/api/products', (req, res) => {
    Product
        .find()
        .then(proucts => {
            res.send(proucts);
        })
        .catch(err => { console.log(err); });
});

app.get('/api/products/slug/:slug', (req, res) => {
    const slug = req.params.slug;

    Product
        .find({ slug: slug })
        .then(product => {
            res.send(product);
        })
        .catch(err => { console.log(err); });

});

app.get('/api/products/swap', (req, res) => {
    Product
        .find({ swap: true })
        .then(products => {
            res.send(products);
        })
        .catch(err => { console.log(err); });
});

app.get('/api/products/buy', (req, res) => {
    Product
        .find({ buy: true })
        .then(products => {
            res.send(products);
        })
        .catch(err => { console.log(err); });
});


const port = process.env.PORT || 8000;

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(port);
        console.log("connected successfully on port " + port);
    })
    .catch(err => {
        console.log(err);
    });