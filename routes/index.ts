import cors from 'cors';
import express, { } from 'express';
import routerRaffle from './raffles';
const router = express.Router();

router.use(cors());

router.use(routerRaffle);

export default router;
