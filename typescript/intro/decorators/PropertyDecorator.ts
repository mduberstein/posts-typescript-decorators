export function PropertyDecorator(
    target: any,
    propertyKey: string | symbol,
) {
    console.log(
        `Decorating property ${String(propertyKey)}` +
        ` from ${target.constructor.name}`,
    );
}
