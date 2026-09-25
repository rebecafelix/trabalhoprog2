export declare abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private localtrabalho;
    private enderecotrabalho;
    private remuneracao;
    private projetos;
    constructor(nome: string, partido: string, esfera: string, poder: string, localtrabalho: string, enderecotrabalho: string, remuneracao: number, projetos: string[]);
    getNome(): string;
    setNome(nome: string): void;
    getPartido(): string;
    setPartido(partido: string): void;
    getEsfera(): string;
    setEsfera(esfera: string): void;
    getPoder(): string;
    setPoder(poder: string): void;
    getLocaltrabalho(): string;
    setLocaltrabalho(localtrabalho: string): void;
    setEnderecotrabalho(): string;
    setEnderecotrabaho(enderecotrabalho: string): void;
    getRemuneracao(): number;
    setRemuneracao(remuneracao: number): void;
    getProjetos(): string[];
    addProjeto(projeto: string): string;
    abstract exercerMandato(): string;
}
//# sourceMappingURL=politico.d.ts.map