import { Politico } from "./politico.js";

export class deputadofederal extends Politico {
    private bancada: string;

    constructor(nome: string, partido: string, esfera: string,
        poder: string, localtrabalho: string, enderecotrabalho: string,
        remuneracao: number, projetos: string[], bancada: string)

        {super(nome, partido, esfera, poder, localtrabalho,
             enderecotrabalho, remuneracao, projetos);

        this.bancada = bancada;
    }

public getBancada(): string {
    return this.bancada;
}

 public exercerMandato(): string {
        return ("Exercem o mandato em que sabatina e aprova ministros do STF, Procurador-Geral da República e presidentes do Banco Central, legisla sobre leis federais e autorizam operacoes financeiras externas")
    }

public votarPEC(propostaPEC: string): string{
    return ("Voto da PEC na proposta: " + propostaPEC);
}

public votarCPI(propostaCPI: string): string{
    return ("Voto da CPI na proposta: " + propostaCPI);
}

public votarPPA(propostaPPA: string): string{
    return ("Voto do PPA na proposta: " + propostaPPA);
}

public votarLDO(propostaLDO: string): string{
    return ("Voto do LDO na proposta: " + propostaLDO);
}

public votarLOA(propostaLOA: string): string{
    return ("Voto do LOA na proposta: " + propostaLOA);
}

public leiComplementar(leicomplementar: string): string{
    return ("proposta pela Lei Complementar: " + leicomplementar);
}


}
