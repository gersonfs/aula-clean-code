import CpfValidatror from "../../src/Services/CpfValidator";

test("CPF nulo", () => {
    let service = new CpfValidatror();
    expect(service.validate()).toBeFalsy();
});

test("CPF vazio", () => {
    let service = new CpfValidatror();
    expect(service.validate("")).toBeFalsy();
});