import express, { } from 'express';
import RafflesController from '../controllers/RafflesController';
const routerRaffle = express.Router();

routerRaffle.get('/raffle', RafflesController.index);
routerRaffle.post('/create', RafflesController.create);

export default routerRaffle;
