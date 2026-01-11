import { Request, Response } from "express";

export class FooController {
  handle(req: Request, res: Response): void {
    res.json({ message: "FooController is working!" });
  }
}
