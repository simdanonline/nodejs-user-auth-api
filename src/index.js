const express = require('express')
const userRouter = require('../src/Routes/User')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})