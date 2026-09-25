export abstract class Politico {
    private nome:string;
    private partido:string;
    private esfera:string;
    private poder:string;
    private localtrabalho:string;
    private enderecotrabalho:string;
    private remuneracao:number;
    private projetos:string[];

    constructor(nome:string, partido:string, esfera:string, poder:string, localtrabalho:string, enderecotrabalho:string, remuneracao:number, projetos:string[]){
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localtrabalho = localtrabalho;
        this.enderecotrabalho = enderecotrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public setPartido(partido: string) :void{
        this.partido = partido;
    }

    public getEsfera(): string{
        return this.esfera;
    }

    public setEsfera(esfera: string):void{
        this.esfera = esfera;
    }

    public getPoder(): string{
        return this.poder;
    }

    public setPoder(poder:string) :void {
        this.poder = poder;
    }

    public getLocaltrabalho() :string{
        return this.localtrabalho;
    }

    public setLocaltrabalho(localtrabalho:string) :void {
        this.localtrabalho = localtrabalho;
    }

    public setEnderecotrabalho(): string {
        return this.enderecotrabalho;
    }

    public setEnderecotrabaho(enderecotrabalho:string) :void {
        this.enderecotrabalho = enderecotrabalho;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public setRemuneracao(remuneracao:number) :void{
        this.remuneracao = remuneracao;
    }

    public getProjetos():string[]{
        return this.projetos;
    }

    public addProjeto(projeto:string) :string {
        this.projetos.push(projeto);
        return ("Projeto adicionado!")
    }

    public abstract exercerMandato(): string;
}

