export class RequestValidator {
  combineTwoDecorator(
    decorator1: PropertyDecorator,
    decorator2: PropertyDecorator,
  ): PropertyDecorator {
    return function (target: any, key: string) {
      decorator1(target, key);
      decorator2(target, key);
    } as PropertyDecorator;
  }

  combineThreeDecorator(
    decorator1: PropertyDecorator,
    decorator2: PropertyDecorator,
    decorator3: PropertyDecorator,
  ): PropertyDecorator {
    return function (target: any, key: string) {
      decorator1(target, key);
      decorator2(target, key);
      decorator3(target, key);
    } as PropertyDecorator;
  }
}
