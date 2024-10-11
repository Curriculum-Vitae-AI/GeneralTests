import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('Oi');
    res.send('Olá Mundo?')
    console.log('Tchau');
});

export default router;
