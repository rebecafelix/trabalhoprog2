import { Politico } from "./politico.js";
export declare class deputadofederal extends Politico {
    private bancada;
    constructor(nome: string, partido: string, esfera: string, poder: string, localtrabalho: string, enderecotrabalho: string, remuneracao: number, projetos: string[], bancada: string);
    getBancada(): string;
    exercerMandato(): string;
    votarPEC(propostaPEC: string): string;
    votarCPI(propostaCPI: string): string;
    votarPPA(propostaPPA: string): string;
    votarLDO(propostaLDO: string): string;
    votarLOA(propostaLOA: string): string;
    leiComplementar(leicomplementar: string): string;
}
//# sourceMappingURL=deputadofederal.d.ts.map