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

export default router;