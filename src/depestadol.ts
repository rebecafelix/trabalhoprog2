import {Politico} from "./politico.js";

export class Depestadual extends Politico {
    private estado:string;
    private comissoes:string[];

    constructor(nome:string, partido:string, esfera:string, poder:string, localtrabalho:string, enderecotrabalho:string, remuneracao:number, projetos:string[], estado:string, comissoes:string[]) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);

        this.estado = estado;
        this.comissoes = comissoes;
    }

    public getEstado():string{
        return this.estado;
    }

    public getComissoes():string[]{
        return this.comissoes;
    }

    public exercerMandato(): string {
        return ("Legislar sobre assuntos do interesse de seu Estado e Fiscalizar o governador")
    }

    public votarppa(titlepropostappa:string):string {
        return ("Voto da PPA na proposta: " + titlepropostappa)
    }

    public votarloa(titlepropostaloa:string):string {
        return ("Voto do LOA na proposta" + titlepropostaloa)
    }

    public votarldo(titlepropostaldo:string):string {
        return ("Voto do LDO na proposta" + titlepropostaldo)
    }

    public proporemendaconstituicao(titlepropostaemenda:string):string{
        return ("Atual emenda proposta: " + titlepropostaemenda)
    }

    public criarcpi(titlecpi:string) :string {
        return ("CPI " + titlecpi + " criada!")
    }

}