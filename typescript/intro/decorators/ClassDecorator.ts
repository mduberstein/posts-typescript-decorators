export function ClassDecorator(
    constructor: new (...args: any[]) => any
    // constructor: Function
) {
    console.log(`Decorating ${constructor.name}`);
}
