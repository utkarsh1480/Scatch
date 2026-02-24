const express = require('express');
const app = express();
const path = require('path');
const parser = require('cookie-parser');
const cookieParser = require('cookie-parser');
const { connect } = require('./config/mongoose-connect.js');
const userRouter = require('./routes/userRouter');
const ownerRouter = require('./routes/ownerRouter.js')
const productsRouter = require('./routes/productRouter.js')

const Port = 3000;

connect("mongodb://127.0.0.1:27017/scatch")
    .then(() => {
        console.log("MongoDb is connected");
    })
    .catch((err) => {
        console.log(err);
    })
   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/user', userRouter);
app.use('/owner', ownerRouter);
app.use('/products', productsRouter);




app.listen(Port, () => {
    console.log("Server is Running")
})