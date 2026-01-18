import { FooRepositoryInterface } from "@/domain/repository/FooRepositoryInterface";
import { FooService } from "@/domain/service/FooService";
import { FooRepository } from "@/infrastructure/repository/FooRepository";
import { FooController } from "@application/controller/FooController";

export class FooControllerFactory {
    private FooRepository: FooRepositoryInterface = new FooRepository();
    private fooService: FooService = new FooService(this.FooRepository);

    create() {
        return new FooController(this.fooService);
    }
}