var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogParameter(target, propertyKey, parameterIndex) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}
class ParameterExample {
    logThis(first = "", greeting = "Hello, world") {
        // do nothing
    }
}
__decorate([
    __param(1, LogParameter)
], ParameterExample.prototype, "logThis", null);
const demoParameter = new ParameterExample();
//# sourceMappingURL=main.js.map