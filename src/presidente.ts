import {Politico} from "./politico.js";

export class Presidente extends Politico {
    private qtdministros:number;

    constructor(nome:string, partido:string, esfera:string, poder:string, localtrabalho:string, enderecotrabalho:string, remuneracao:number, projetos:string[], qtdministros:number) {
        super(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos);

        this.qtdministros = qtdministros;
    }

    public getQtdministros():number {
        return this.qtdministros
    }

    public exercerMandato(): string {
        return ("Propõe, sanciona e veta leis e edita medidas provisórias.");
    }

    public nomearMinistro(nomeministro:string, ministerio:string):string{
        return (nomeministro + " nomeado ao ministério " + ministerio);
    }

    public exonerarMinistro(nomeministro:string, ministerio:string):string{
        return (nomeministro + " exonerado do ministério " + ministerio);
    }

    public comandarForcasArmadas(ordem:string):string{
        return ("Ordem passada as Forcas Armadas!")
    }

    public representarPais(evento:string):string{
        return ("Representar o Brasil no evento " + evento)
    }

    public elaborarPpa(titleproposta:string):string{
        return("Proposta do PPA feita. Título: " + titleproposta)
    }

    public elaborarLDO(titlepl1:string):string{
        return("Proposta de lei enviada ao LDO. Título: "+ titlepl1)
    }

    public elaborarLOA(titlepl2:string):string{
        return("Proposta de lei enviada ao LOA. Título: "+ titlepl2)
    }


}