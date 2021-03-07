import { Router, Request, Response, Express } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const router = Router();

router.post('/register', async (request: Request, response: Response) => {
    let { name, email, password } = request.body;

    
    if (await User.findOne({email})) {
        return response.status(400).json({error: 'User already exists'});
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    password = encryptedPassword
    
    try {
        const user = await User.create({
            name,
            email,
            password
        });

        user.password = undefined;

        return response.status(201).json(user);
    } catch(err) {
        return response.status(400).json({ error : 'Registration falied' })
    }
});


module.exports = (app: Express) => app.use('/auth', router);