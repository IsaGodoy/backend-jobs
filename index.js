const express = require('express')
const app = express()
const port = 3000

// Importa los enrutadores
const userRouter = require('./src/routes/users/users');

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})