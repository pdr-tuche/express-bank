import { Foo } from "@/domain/entity/Foo";
import { FooService } from "@/domain/service/FooService";
import { Request, Response } from "express";

export class FooController {
  constructor(private readonly fooService: FooService) {}

  async handle(req: Request, res: Response): Promise<void> {
    res.json(await this.fooService.findById(1));
  }
}
