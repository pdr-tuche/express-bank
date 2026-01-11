import { Router } from "express";
import { FooControllerFactory } from "@/application/factory/FooControllerFactory";

export class FooRoute {
  static getRouter() {
    const router = Router();

    router.get("/foo", new FooControllerFactory().create().handle);

    return router;
  }
}
