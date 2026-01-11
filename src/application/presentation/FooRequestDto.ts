export class FooRequestDto {
  constructor(private id: number, private bar: string) {}

  getId = (): number => this.id;

  getBar = (): string => this.bar;
}
