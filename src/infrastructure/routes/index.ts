import { Router } from "express";
import { HealthRoute } from "./HealthRoute";
import { FooRouter } from "./FooRoute";

export class Routes {
  static getRoutes(): Router {
    const router = Router();

    router.use("/", [HealthRoute.getRouter(), FooRouter.getRouter()]);

    return router;
  }
}
