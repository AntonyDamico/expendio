import 'reflect-metadata';
import TypeOrmConnection from './config/TypeOrmConnection';
import Server from './Server';
import dotenv from 'dotenv';

dotenv.config();
const port = parseInt(process.env.SERVER_PORT, 10);

const server = new Server(new TypeOrmConnection());
server.listen(port);
