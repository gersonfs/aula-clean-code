export default class CpfValidatror {

    validate(cpf?: String): boolean {

        if (cpf === null || cpf === undefined) {
            return false;
        }


        if (cpf.length != 11 && cpf.length != 14) {
            return false;
        }

        cpf = this.sanitize(cpf);


        if (this.todosDigitosIguais(cpf)) {
            return false;
        }


        let d1, d2;
        let dg1, dg2, rest;
        let digito;
        let nDigResult;
        d1 = d2 = 0;
        dg1 = dg2 = rest = 0;

        for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
            digito = parseInt(cpf.substring(nCount - 1, nCount));
            d1 = d1 + (11 - nCount) * digito;
            d2 = d2 + (12 - nCount) * digito;
        };

        rest = (d1 % 11);

        dg1 = (rest < 2) ? 0 : 11 - rest;
        d2 += 2 * dg1;
        rest = (d2 % 11);
        dg2 = (rest < 2) ? 0 : 11 - rest;

        let nDigVerific = cpf.substring(cpf.length - 2, cpf.length);
        nDigResult = "" + dg1 + "" + dg2;
        return nDigVerific == nDigResult;

    }

    sanitize(cpf: String): String {
        return cpf
            .replace('.', '')
            .replace('.', '')
            .replace('-', '')
            .replace(" ", "");
    }

    todosDigitosIguais(cpf: String): boolean {
        let firstDigit = cpf[0] || "";

        return cpf.split("").every(c => c === firstDigit);
    }
}