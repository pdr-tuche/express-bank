import express, { Express } from "express";
import { Routes } from "../../routes/index";

export class Server {
  private app: Express;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes(): void {
    this.app.use("/", Routes.getRoutes());

    // Rota 404
    this.app.use((req, res) => {
      res.status(404).json({
        error: "Route not found",
        path: req.path,
      });
    });
  }

  start(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on port ${this.port}`);
    });
  }

  getApp(): Express {
    return this.app;
  }
}
