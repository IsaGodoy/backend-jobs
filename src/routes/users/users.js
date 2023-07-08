const express = require('express');
const { PrismaClient } = require('@prisma/client')

const router = express.Router();
const prisma = new PrismaClient()


// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {

    const allUsers = await prisma.users.findMany()

    res.json(allUsers)
});

// Ruta para obtener un usuario por su ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Obtener usuario con ID ${userId}`);
});

// Exporta el enrutador
module.exports = router;
