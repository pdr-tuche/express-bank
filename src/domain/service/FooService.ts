import { FooRepositoryInterface } from "@domain/repository/FooRepositoryInterface";

export class FooService {
  constructor(private readonly fooRepository: FooRepositoryInterface) {}

  async findById(id: number) {
    return await this.fooRepository.findById(id);
  }
}
