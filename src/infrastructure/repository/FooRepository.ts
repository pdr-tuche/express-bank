import { Foo } from "@/domain/entity/Foo";
import { FooRepositoryInterface } from "@/domain/repository/FooRepositoryInterface";

export class FooRepository implements FooRepositoryInterface {
  findById(id: number): Promise<Foo> {
    return Promise.resolve(new Foo(id, "Sample Foo"));
  }
}
