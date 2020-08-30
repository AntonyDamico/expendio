import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import TypeOrmConnection from './config/TypeOrmConnection';

export default class Server {
  private app: Application;

  public constructor() {
    this.setApp();
    this.loadConnection();
    this.loadPlugins();
    this.initializeRoutes();
  }

  private setApp(): void {
    this.app = express();
  }

  private loadConnection(): void {
    TypeOrmConnection.createConnection();
  }

  private loadPlugins(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private initializeRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({ response: true });
    });
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
}
