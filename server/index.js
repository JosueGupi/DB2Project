const express = require("express")
const app = express()
const userRouter =  require('./routes/Users')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/users',userRouter)

app.listen(3001,()=>{
    console.log('Servers Run')
});


