import { Politico } from "./politico.js";

export class Senador extends Politico {
    private estado:string;
    private anoeleicao:number;

    constructor(nome:string, partido:string, esfera:string, poder:string, localtrabalho:string, enderecotrabalho:string, remuneracao:number, projetos:string[], estado:string, anoeleicao:number) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos)

        this.estado = estado;
        this.anoeleicao = anoeleicao;
    }

    public getEstado():string{
        return this.estado;
    }

    public getAnoeleicao():number {
        return this.anoeleicao;
    }

    public exercerMandato(): string {
        return ("Exercem o mandato em que sabatina e aprova ministros do STF, Procurador-Geral da República e presidentes do Banco Central, legisla sobre leis federais e autorizam operacoes financeiras externas")
    }

    public aprovarAutoridades(nomeautoridade:string): string {
        return("Autoridade " + nomeautoridade + " Aprovada!")
    }

     public julgarCrimesResponsabilidade(): string {
        return("Crime X Julgado!")
    }

     public representarEstado(estado:string): string {
        return("Representando o estado de " + estado)
    }


}