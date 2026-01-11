import { Router } from "express";
import { FooController } from "../../application/controller/FooController";

export class FooRouter {
  static getRouter() {
    const router = Router();

    router.get("/foo", new FooController().handle);

    return router;
  }
}
