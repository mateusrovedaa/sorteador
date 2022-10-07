import { Request, Response } from 'express';
import { Raffle } from "../models/Raffle";
import sequelize, { } from 'sequelize';

class RafflesController {

    index = async (req: Request, res: Response) => {
        try {
            const winner = await Raffle.findOne({
                order: [
                    sequelize.fn( 'RANDOM' )
                  ]
              });

            res.json(winner);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const raffle = await Raffle.create(req.body);
            res.json(raffle);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

}

export default new RafflesController;