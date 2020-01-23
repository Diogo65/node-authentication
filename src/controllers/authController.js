const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        // if( await User.findOne({ email }))
        //     return res.status(400).send({ error: 'User already exists' });
        console.log({ email});
        const user = await User.create(req.body);

        // user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

//recupera o parametro 'app' que é passado p/ controller no index.js
//definindo um prefixo /auth p/ essa rota - ficando /auth/register
module.exports = app => app.use('/auth', router);