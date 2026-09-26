import { Politico } from "./politico.js";
export declare class Governador extends Politico {
    private estado;
    private secretarios;
    constructor(nome: string, partido: string, esfera: string, poder: string, localtrabalho: string, enderecotrabalho: string, remuneracao: number, projetos: string[], estado: string);
    getEstado(): string;
    getSecretarios(): string[];
    exercerMandato(): string;
    ggPoliciaMilitar(): string;
    administrarRodovias(): string;
    coordenarEducacao(): string;
    coordenarSaude(): string;
    elaborarPPA(): string;
    elaborarLDO(): string;
    elaborarLOA(): string;
}
//# sourceMappingURL=Governador.d.ts.map