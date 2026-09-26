import {Politico} from "./politico.js";

export class Governador extends Politico {
    private estado: string;
    private secretarios: string[];

    constructor(nome: string, partido: string, esfera: string,
        poder: string, localtrabalho: string, enderecotrabalho: string,
        remuneracao: number, projetos: string[], estado: string) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);

        this.estado = estado;
        this.secretarios = [];
    }

    public getEstado(): string {
        return this.estado;
    }

    public getSecretarios(): string[] {
        return this.secretarios;
    }

    public exercerMandato(): string {
        return "Exercem o mandato como governadores dos estados e do Distrito Federal"
    }

    public ggPoliciaMilitar(): string {
        return "Governador gerencia a Polícia Militar.";
    }

    public administrarRodovias(): string{
        return "Rodovias administradas pelo governador.";
    }

    public coordenarEducacao(): string {
        return "Educação estadual coordenada pelo governador.";
    }

    public coordenarSaude(): string {
        return "Saúde estadual coordenada pelo governador.";
    }

    public elaborarPPA(): string {
        return "PPA elaborado pelo governador.";
    }

    public elaborarLDO(): string {
        return "LDO elaborada pelo governador.";
    }

    public elaborarLOA(): string {
        return "LOA elaborada pelo governador.";
    }


}
