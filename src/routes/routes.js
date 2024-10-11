import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('Oi');
    res.send('Tamo no servidor :O')
    console.log('Tchau');
});

export default router;
