import { Decorator } from "./decorators/Decorator";

@Decorator("class")
class Demo {
    @Decorator("property")
    public foo: string = "foo";

    constructor() {
        console.log("Simple class initialized");
        this.writeGreeting();
    }

    @Decorator("accessor")
    public get bar() {
        return "bar";
    }

    @Decorator("method")
    public writeGreeting(
        @Decorator("parameter") greeting: string = "Hello, world",
    ) {
        console.log(greeting);
    }
}

const demo = new Demo();
