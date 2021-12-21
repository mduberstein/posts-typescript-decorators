export function MethodDecorator(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    console.log(
        `Decorating method ${String(propertyKey)}` +
        ` from ${target.constructor.name}`,
    );
}
