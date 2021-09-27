
import Cpf from "./Cpf";

test("Valid CPF", () => {
    let cpf = new Cpf("15713585018");
    expect(cpf.getCpf()).toBe("15713585018");
});

test("Invalid CPF", () => {
    expect(() => {
        new Cpf("15713585019")
    }).toThrow();
});