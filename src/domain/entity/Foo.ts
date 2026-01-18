export class Foo {
  constructor(private id: number, private bar: string) {
    this.bar = bar;
  }

  getBar = (): string => this.bar;
}
