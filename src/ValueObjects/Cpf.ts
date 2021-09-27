import CpfValidatror from "../Services/CpfValidator";

export default class Cpf {
    cpf: string;

    constructor(cpf: string) {
        let validator = new CpfValidatror();
        let cpfLimpo = cpf.replace(/[^0-9]/g, '');
        if (!validator.validate(cpfLimpo)) {
            throw new Error('O CPF ' + cpf + ' é inválido!');
        }
        this.cpf = cpfLimpo;
    }

    getCpf(): string {
        return this.cpf;
    }

}