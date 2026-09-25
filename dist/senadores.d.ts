import { Politico } from "./politico.js";
export declare class Senador extends Politico {
    private estado;
    private anoeleicao;
    constructor(nome: string, partido: string, esfera: string, poder: string, localtrabalho: string, enderecotrabalho: string, remuneracao: number, projetos: string[], estado: string, anoeleicao: number);
    getEstado(): string;
    getAnoeleicao(): number;
    exercerMandato(): string;
    aprovarAutoridades(nomeautoridade: string): string;
    julgarCrimesResponsabilidade(): string;
    representarEstado(estado: string): string;
}
//# sourceMappingURL=senadores.d.ts.map