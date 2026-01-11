import { Router } from "express";
import { HealthRoute } from "./HealthRoute";
import { FooRoute } from "./FooRoute";

export class Routes {
  static getRoutes(): Router {
    const router = Router();

    router.use("/", [HealthRoute.getRouter(), FooRoute.getRouter()]);

    return router;
  }
}
