import 'dotenv/config'

import express from 'express';
const app = express()


// Importa los enrutadores
import userRouter from './src/routes/users'

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Example app listening on port ${process.env.APP_PORT}`)
})