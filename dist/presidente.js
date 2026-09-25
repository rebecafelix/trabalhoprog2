import { Politico } from "./politico.js";
export class Presidente extends Politico {
    qtdministros;
    constructor(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos, qtdministros) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);
        this.qtdministros = qtdministros;
    }
    getQtdministros() {
        return this.qtdministros;
    }
    exercerMandato() {
        return ("Propõe, sanciona e veta leis e edita medidas provisórias.");
    }
    nomearMinistro(nomeministro, ministerio) {
        return (nomeministro + " nomeado ao ministério " + ministerio);
    }
    exonerarMinistro(nomeministro, ministerio) {
        return (nomeministro + " exonerado do ministério " + ministerio);
    }
    comandarForcasArmadas(ordem) {
        return ("Ordem passada as Forcas Armadas!");
    }
    representarPais(evento) {
        return ("Representar o Brasil no evento " + evento);
    }
    elaborarPpa(titleproposta) {
        return ("Proposta do PPA feita. Título: " + titleproposta);
    }
    elaborarLDO(titlepl1) {
        return ("Proposta de lei enviada ao LDO. Título: " + titlepl1);
    }
    elaborarLOA(titlepl2) {
        return ("Proposta de lei enviada ao LOA. Título: " + titlepl2);
    }
}
//# sourceMappingURL=presidente.js.map