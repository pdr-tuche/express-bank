import { FooRepository } from "@/infrastructure/repository/FooRepository";
import { FooRepositoryInterface } from "@domain/repository/FooRepositoryInterface";

export class FooService {
  constructor(private readonly fooRepository: FooRepositoryInterface) {}

  findById(id: number) {
    const x = this.fooRepository.findById(id);
    console.log(x);
    return x;
  }
}
