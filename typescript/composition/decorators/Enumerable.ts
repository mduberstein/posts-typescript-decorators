export function Enumerable(enumerable: boolean = true) {
    console.log(
        `Creating ${enumerable ? "" : "non-"}` +
        `enumerable property factory`,
    );
    return function decorator(
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor,
    ) {
        console.log(
            `Making ${String(propertyKey)}` +
            ` ${enumerable ? "" : "non-"}enumerable`,
        );
        descriptor.enumerable = enumerable;
        return descriptor;
    };
}
