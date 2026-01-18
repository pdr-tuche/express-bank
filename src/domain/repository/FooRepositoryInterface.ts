import { Foo } from "@domain/entity/Foo";

export interface FooRepositoryInterface {
  findById(id: number): Promise<Foo>;
}
