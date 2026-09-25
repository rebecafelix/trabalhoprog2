import { Politico } from "./politico.js";
export class Senador extends Politico {
    estado;
    anoeleicao;
    constructor(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos, estado, anoeleicao) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoeleicao = anoeleicao;
    }
    getEstado() {
        return this.estado;
    }
    getAnoeleicao() {
        return this.anoeleicao;
    }
    exercerMandato() {
        return ("Exercem o mandato em que sabatina e aprova ministros do STF, Procurador-Geral da República e presidentes do Banco Central, legisla sobre leis federais e autorizam operacoes financeiras externas");
    }
    aprovarAutoridades(nomeautoridade) {
        return ("Autoridade " + nomeautoridade + " Aprovada!");
    }
    julgarCrimesResponsabilidade() {
        return ("Crime X Julgado!");
    }
    representarEstado(estado) {
        return ("Representando o estado de " + estado);
    }
}
//# sourceMappingURL=senadores.js.map