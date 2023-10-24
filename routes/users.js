import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 30
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} has been added to the database!`);
});


export default router;