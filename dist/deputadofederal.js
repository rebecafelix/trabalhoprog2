import { Politico } from "./politico.js";
export class deputadofederal extends Politico {
    bancada;
    constructor(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos, bancada) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    exercerMandato() {
        return ("Exercem o mandato em que sabatina e aprova ministros do STF, Procurador-Geral da República e presidentes do Banco Central, legisla sobre leis federais e autorizam operacoes financeiras externas");
    }
    votarPEC(propostaPEC) {
        return ("Voto da PEC na proposta: " + propostaPEC);
    }
    votarCPI(propostaCPI) {
        return ("Voto da CPI na proposta: " + propostaCPI);
    }
    votarPPA(propostaPPA) {
        return ("Voto do PPA na proposta: " + propostaPPA);
    }
    votarLDO(propostaLDO) {
        return ("Voto do LDO na proposta: " + propostaLDO);
    }
    votarLOA(propostaLOA) {
        return ("Voto do LOA na proposta: " + propostaLOA);
    }
    leiComplementar(leicomplementar) {
        return ("proposta pela Lei Complementar: " + leicomplementar);
    }
}
//# sourceMappingURL=deputadofederal.js.map