import { Politico } from "./politico.js";
export declare class Depestadual extends Politico {
    private estado;
    private comissoes;
    constructor(nome: string, partido: string, esfera: string, poder: string, localtrabalho: string, enderecotrabalho: string, remuneracao: number, projetos: string[], estado: string, comissoes: string[]);
    getEstado(): string;
    getComissoes(): string[];
    exercerMandato(): string;
    votarppa(titlepropostappa: string): string;
    votarloa(titlepropostaloa: string): string;
    votarldo(titlepropostaldo: string): string;
    proporemendaconstituicao(titlepropostaemenda: string): string;
    criarcpi(titlecpi: string): string;
}
//# sourceMappingURL=depestadol.d.ts.map