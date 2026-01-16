import { Router } from "express";
import { FooControllerFactory } from "@/application/factory/FooControllerFactory";
import { Foo } from "@/domain/entity/Foo";

export class FooRoute {
  static getRouter() {
    const router = Router();
    const fooController = new FooControllerFactory().create();
    router.get("/foo", fooController.handle.bind(fooController));

    return router;
  }
}
