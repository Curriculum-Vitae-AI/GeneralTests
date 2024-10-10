import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('Oi');
    res.send('Hello World')
    console.log('Tchau');
});

export default router;
