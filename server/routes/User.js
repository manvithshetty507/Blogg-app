const express = require('express');
const { Users } = require('../models'); 
const router = express.Router();
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        await Users.create({
            username: username,
            password: hash
        });
        res.json('success');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json('Internal Server Error');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
        // User not found
        return res.status(404).json({ error: "User doesn't exist" });
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            // Incorrect password
            return res.status(401).json({ error: "Wrong credentials" });
        }
        const accessToken = sign({ username:user.username, id:user.id },"mytoken")
        // Successful login
        return res.json(accessToken);
    });
});


module.exports = router;
