import { Politico } from "./politico.js";
export class Depestadual extends Politico {
    estado;
    comissoes;
    constructor(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos, estado, comissoes) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = comissoes;
    }
    getEstado() {
        return this.estado;
    }
    getComissoes() {
        return this.comissoes;
    }
    exercerMandato() {
        return ("Legislar sobre assuntos do interesse de seu Estado e Fiscalizar o governador");
    }
    votarppa(titlepropostappa) {
        return ("Voto da PPA na proposta: " + titlepropostappa);
    }
    votarloa(titlepropostaloa) {
        return ("Voto do LOA na proposta" + titlepropostaloa);
    }
    votarldo(titlepropostaldo) {
        return ("Voto do LDO na proposta" + titlepropostaldo);
    }
    proporemendaconstituicao(titlepropostaemenda) {
        return ("Atual emenda proposta: " + titlepropostaemenda);
    }
    criarcpi(titlecpi) {
        return ("CPI " + titlecpi + " criada!");
    }
}
//# sourceMappingURL=depestadol.js.map