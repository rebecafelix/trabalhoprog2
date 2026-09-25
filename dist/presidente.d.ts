import { Politico } from "./politico.js";
export declare class Presidente extends Politico {
    private qtdministros;
    constructor(nome: string, partido: string, esfera: string, poder: string, localtrabalho: string, enderecotrabalho: string, remuneracao: number, projetos: string[], qtdministros: number);
    getQtdministros(): number;
    exercerMandato(): string;
    nomearMinistro(nomeministro: string, ministerio: string): string;
    exonerarMinistro(nomeministro: string, ministerio: string): string;
    comandarForcasArmadas(ordem: string): string;
    representarPais(evento: string): string;
    elaborarPpa(titleproposta: string): string;
    elaborarLDO(titlepl1: string): string;
    elaborarLOA(titlepl2: string): string;
}
//# sourceMappingURL=presidente.d.ts.map