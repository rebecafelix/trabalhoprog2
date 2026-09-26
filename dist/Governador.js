import { Politico } from "./politico.js";
export class Governador extends Politico {
    estado;
    secretarios;
    constructor(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos, estado) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);
        this.estado = estado;
        this.secretarios = [];
    }
    getEstado() {
        return this.estado;
    }
    getSecretarios() {
        return this.secretarios;
    }
    exercerMandato() {
        return "Exercem o mandato como governadores dos estados e do Distrito Federal";
    }
    ggPoliciaMilitar() {
        return "Governador gerencia a Polícia Militar.";
    }
    administrarRodovias() {
        return "Rodovias administradas pelo governador.";
    }
    coordenarEducacao() {
        return "Educação estadual coordenada pelo governador.";
    }
    coordenarSaude() {
        return "Saúde estadual coordenada pelo governador.";
    }
    elaborarPPA() {
        return "PPA elaborado pelo governador.";
    }
    elaborarLDO() {
        return "LDO elaborada pelo governador.";
    }
    elaborarLOA() {
        return "LOA elaborada pelo governador.";
    }
}
//# sourceMappingURL=Governador.js.map