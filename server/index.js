const express = require("express")
const app = express()
const userRouter =  require('./routes/Users')
const storeRouter = require('./routes/Stores')
const subRouter = require('./routes/Subs')
const shippingRouter = require('./routes/Shipping')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/users',userRouter);
app.use('/stores',storeRouter);
app.use('/subs',subRouter);
app.use('/shipping',shippingRouter);

app.listen(3001,()=>{
    console.log('Servers Run')
});


