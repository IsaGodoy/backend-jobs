import express from 'express'
import userService from '../services/users'

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {

    console.log("init getallusers")

    userService.getAllUsers()
        .then(data => res.json(data))
        .catch(error => res.json({ error }))
});

// Ruta para obtener un usuario por su ID
router.get('/:id', (req, res) => {
    const userID = Number(req.params.id);

    userService.getUserById(userID)
        .then(data => res.json(data))
        .catch(error => res.json({ error }))
});

//Test

// router.get('/new/:name', async (req, res) => {

//     const name = req.params.name

//     const Users = await prisma.users.create({
//         data: {
//             name
//         }
//     })

//     res.json(Users)
// });

// Exporta el enrutador
export default router
