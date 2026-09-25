export class Politico {
    nome;
    partido;
    esfera;
    poder;
    localtrabalho;
    enderecotrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, localtrabalho, enderecotrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localtrabalho = localtrabalho;
        this.enderecotrabalho = enderecotrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getLocaltrabalho() {
        return this.localtrabalho;
    }
    setLocaltrabalho(localtrabalho) {
        this.localtrabalho = localtrabalho;
    }
    setEnderecotrabalho() {
        return this.enderecotrabalho;
    }
    setEnderecotrabaho(enderecotrabalho) {
        this.enderecotrabalho = enderecotrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    addProjeto(projeto) {
        this.projetos.push(projeto);
        return ("Projeto adicionado!");
    }
}
//# sourceMappingURL=politico.js.map