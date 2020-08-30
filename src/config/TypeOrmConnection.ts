import { createConnection, Connection } from 'typeorm';
import dotenv from 'dotenv';
import { join } from 'path';
import IConnection from './IConnection';

dotenv.config();

export default class TypeOrmConnection implements IConnection {
  public initialize(): Promise<Connection> {
    return createConnection({
      // name: 'default',
      type: 'mysql',
      // host: 'localhost',
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: false,
      entities: [join(__dirname, `../modules/**/*.{ts,js}`)],
      // entities: [join(__dirname, `../**/*.js`)],
    });
  }
}
