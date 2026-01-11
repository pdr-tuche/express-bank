import { Router, Request, Response } from "express";

export class HealthRoute {
  static getRouter(): Router {
    const router = Router();

    router.get("/", (req: Request, res: Response) => {
      res.json({
        message: "Welcome to Express Bank",
        status: "OK",
        timestamp: new Date().toISOString(),
      });
    });

    router.get("/health", (req: Request, res: Response) => {
      res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
      });
    });

    return router;
  }
}
