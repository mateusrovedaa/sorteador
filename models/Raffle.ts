import { DataTypes, Model } from 'sequelize';
import db from '../db';

export class Raffle extends Model { }

Raffle.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    tableName: 'raffles',
    modelName: 'Raffle'
});