import express from 'express';
const app = express()
const port = 3000

// Importa los enrutadores
import userRouter from './src/routes/users/index'

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})