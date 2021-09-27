import CpfValidatror from "./CpfValidator";

test("CPF nulo", () => {
    let service = new CpfValidatror();
    expect(service.validate()).toBeFalsy();
});

test("CPF vazio", () => {
    let service = new CpfValidatror();
    expect(service.validate("")).toBeFalsy();
});


test("CPF valor inválido", () => {
    let service = new CpfValidatror();
    expect(service.validate("abc12345678")).toBeFalsy();
});

test("CPF valor inválido digitos iguais", () => {
    let service = new CpfValidatror();
    expect(service.validate("11111111111")).toBeFalsy();
});

test("CPF válido somente números", () => {
    let service = new CpfValidatror();
    expect(service.validate("11234392062")).toBeTruthy();
});

test("CPF válido com pontuação", () => {
    let service = new CpfValidatror();
    expect(service.validate("945.207.120-68")).toBeTruthy();
});