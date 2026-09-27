import { Presidente } from "./presidente.js";
import { Depestadual } from "./depestadol.js";
import { Senador } from "./senadores.js";
import { Governador } from "./Governador.js";
import { deputadofederal } from "./deputadofederal.js";
const presidente = new Presidente("Luiz Inácio Lula da Silva", "PT", "Federal", "Executivo", "Palácio do Planalto", "Praca dos Três Poderes - Brasília/DF", 50000, ["Bolsa Familia", "ProUni", "CadUnico"], 10);
console.log(presidente.getQtdministros());
console.log(presidente.exercerMandato());
console.log(presidente.nomearMinistro("Fernando Haddad", "Educação"));
console.log(presidente.exonerarMinistro("Fernando Haddad", "Educação"));
console.log(presidente.comandarForcasArmadas("Ordem de Defesa Nacional"));
console.log(presidente.representarPais("Cúpula do Clima"));
console.log(presidente.elaborarPpa("Plano Plurianual 2024-2027"));
console.log(presidente.elaborarLDO("Lei de Diretrizes Orçamentárias 2024"));
console.log(presidente.elaborarLOA("Lei Orçamentária Anual 2024"));
const governadorPE = new Governador("Raquel Teixeira Lyra Lucena", "PSD", "Estadual", "Executivo", "Palácio do Planalto", "Praca dos Três Poderes - Brasília/DF", 60800, ["Mães de Pernambuco", "Juntos pela Segurança",], "Pernambuco");
console.log(governadorPE.getEstado());
console.log(governadorPE.getSecretarios());
console.log(governadorPE.exercerMandato());
console.log(governadorPE.ggPoliciaMilitar());
console.log(governadorPE.administrarRodovias());
console.log(governadorPE.coordenarEducacao());
console.log(governadorPE.coordenarSaude());
console.log(governadorPE.elaborarPPA());
console.log(governadorPE.elaborarLDO());
console.log(governadorPE.elaborarLOA());
const governadorSP = new Governador("Tarcísio Gomes de Freitas", "Republicanos", "Estadual", "Executivo", "Palácio do Planalto", "Praca dos Três Poderes - Brasília/DF", 36301.53, ["Privatização da Sabesp", "Trem Intercidades", "Túnel Imerso"], "São Paulo");
console.log(governadorSP.getEstado());
console.log(governadorSP.getSecretarios());
console.log(governadorSP.exercerMandato());
console.log(governadorSP.ggPoliciaMilitar());
console.log(governadorSP.administrarRodovias());
console.log(governadorSP.coordenarEducacao());
console.log(governadorSP.coordenarSaude());
console.log(governadorSP.elaborarPPA());
console.log(governadorSP.elaborarLDO());
console.log(governadorSP.elaborarLOA());
const deputadoFederalPE1 = new deputadofederal("Marília Valença Rocha Arraes de Alencar", "PDT", "Federal", "Legislativo", "Câmara dos Deputados", "Praca dos Três Poderes - Brasília/DF", 41650.92, ["Combate à Pobreza Menstrual", "Incentivo à Cultura", "Saúde Pública e Produção Nacional"], "Bancada Feminina");
console.log(deputadoFederalPE1.getBancada());
console.log(deputadoFederalPE1.exercerMandato());
console.log(deputadoFederalPE1.votarPEC("PEC 123/2024"));
console.log(deputadoFederalPE1.votarCPI("CPI da Corrupção"));
console.log(deputadoFederalPE1.votarPPA("PPA 2024-2027"));
console.log(deputadoFederalPE1.votarLDO("LDO 2024"));
console.log(deputadoFederalPE1.votarLOA("LOA 2024"));
console.log(deputadoFederalPE1.leiComplementar("Lei Complementar nº 123/2024"));
const deputadoFederalPE2 = new deputadofederal("Iza Paula de Deus e Mello Albuquerque Arruda", "MDB", "Federal", "Legislativo", "Câmara dos Deputados", "Praca dos Três Poderes - Brasília/DF", 44008.52, ["PL 1870/2025: Inclui preparados antissolares (protetores solares) no Programa Farmácia Popular.", "PL 2614/2025: Institui o Dia Nacional de Conscientização sobre a Síndrome Congênita do Zika.",
    "PL 2650/2025: Cria a Política Nacional de Atenção à Pessoa com Doença Celíaca."], "bancada do MDB");
console.log(deputadoFederalPE2.getBancada());
console.log(deputadoFederalPE2.exercerMandato());
console.log(deputadoFederalPE2.votarPEC("PEC 456/2025"));
console.log(deputadoFederalPE2.votarCPI("CPI da Corrupção"));
console.log(deputadoFederalPE2.votarPPA("PPA 2025-2028"));
console.log(deputadoFederalPE2.votarLDO("LDO 2025"));
console.log(deputadoFederalPE2.votarLOA("LOA 2025"));
console.log(deputadoFederalPE2.leiComplementar("Lei Complementar nº 456/2025"));
const deputadoFederalPE3 = new deputadofederal("Túlio Gadêlha Sales de Melo", "PSD", "Federal", "Legislativo", "Câmara dos Deputados", "Praca dos Três Poderes - Brasília/DF", 33763, ["Proposta [PL nº 702/2023] para assegurar prioridade na tramitação e julgamento de processos judiciais ligados a crimes de exploração de trabalhadores em condições análogas à escravidão",
    "Lei Complementar nº 41/2026, focado no Sistema Nacional de Enfrentamento da Violência contra Meninas e Mulheres."
], "Ambientalista,Governista e Trabalhista e Direitos Humanos");
console.log(deputadoFederalPE3.getBancada());
console.log(deputadoFederalPE3.exercerMandato());
console.log(deputadoFederalPE3.votarPEC("PEC 789/2026"));
console.log(deputadoFederalPE3.votarCPI("CPI da Corrupção"));
console.log(deputadoFederalPE3.votarPPA("PPA 2026-2029"));
console.log(deputadoFederalPE3.votarLDO("LDO 2026"));
console.log(deputadoFederalPE3.votarLOA("LOA 2026"));
console.log(deputadoFederalPE3.leiComplementar("Lei Complementar nº 789/2026"));
const deputadoFederalRJ1 = new deputadofederal("Ricardo Martins David", "PSDB", "Federal", "Legislativo", "Câmara dos Deputados", "Praça dos Três Poderes - Brasília/DF", 46366.19, ["Propostas legislativas de sua autoria",
    "Projetos voltados ao desenvolvimento de atividades e apoio a programas, eventos e projetos de esporte, educação, lazer e inclusão social no Estado do Rio de Janeiro"
], "PSDB e Cidadania");
console.log(deputadoFederalRJ1.getBancada());
console.log(deputadoFederalRJ1.exercerMandato());
console.log(deputadoFederalRJ1.votarPEC("PEC 123/2024"));
console.log(deputadoFederalRJ1.votarCPI("CPI da Corrupção"));
console.log(deputadoFederalRJ1.votarPPA("PPA 2024-2027"));
console.log(deputadoFederalRJ1.votarLDO("LDO 2024"));
console.log(deputadoFederalRJ1.votarLOA("LOA 2024"));
console.log(deputadoFederalRJ1.leiComplementar("Lei Complementar nº 123/2024"));
const deputadoFederalRJ2 = new deputadofederal("Maria Laura Monteza de Souza Carneiro", "PSD", "Federal", "Legislativo", "Câmara dos Deputados", "Praça dos Três Poderes - Brasília/DF", 46366.19, [
    "Atuação em projetos relacionados aos direitos das mulheres",
    "Projetos relacionados à infância, adolescência e família"
], "PSD");
console.log(deputadoFederalRJ2.getBancada());
console.log(deputadoFederalRJ2.exercerMandato());
console.log(deputadoFederalRJ2.votarPEC("PEC 456/2025"));
console.log(deputadoFederalRJ2.votarCPI("CPI da Corrupção"));
console.log(deputadoFederalRJ2.votarPPA("PPA 2025-2028"));
console.log(deputadoFederalRJ2.votarLDO("LDO 2025"));
console.log(deputadoFederalRJ2.votarLOA("LOA 2025"));
console.log(deputadoFederalRJ2.leiComplementar("Lei Complementar nº 456/2025"));
const deputadoEstadualPE1 = new Depestadual("Álvaro Porto", "PSDB", "Estadual", "Legislativo", "Assembleia Legislativa de Pernambuco", "Rua da União, Recife - PE", 33763, [
    "Projetos de interesse do Estado de Pernambuco",
    "Propostas relacionadas ao desenvolvimento de Pernambuco"
], "Pernambuco", ["Constituição, Legislação e Justiça", "Administração Pública"]);
console.log(deputadoEstadualPE1.getEstado());
console.log(deputadoEstadualPE1.getComissoes());
console.log(deputadoEstadualPE1.exercerMandato());
console.log(deputadoEstadualPE1.votarppa("PPA 2024-2027"));
console.log(deputadoEstadualPE1.votarloa("LOA 2024"));
console.log(deputadoEstadualPE1.votarldo("LDO 2024"));
console.log(deputadoEstadualPE1.proporemendaconstituicao("Emenda Constitucional nº 123/2024"));
console.log(deputadoEstadualPE1.criarcpi("CPI da Corrupção"));
const deputadoEstadualPE2 = new Depestadual("Diogo Moraes", "PSB", "Estadual", "Legislativo", "Assembleia Legislativa de Pernambuco", "Rua da União, Recife - PE", 33763, [
    "Projetos relacionados ao processo legislativo",
    "Propostas voltadas ao desenvolvimento de Pernambuco"
], "Pernambuco", ["Constituição, Legislação e Justiça", "Administração Pública"]);
console.log(deputadoEstadualPE2.getEstado());
console.log(deputadoEstadualPE2.getComissoes());
console.log(deputadoEstadualPE2.exercerMandato());
console.log(deputadoEstadualPE2.votarppa("PPA 2024-2027"));
console.log(deputadoEstadualPE2.votarloa("LOA 2024"));
console.log(deputadoEstadualPE2.votarldo("LDO 2024"));
console.log(deputadoEstadualPE2.proporemendaconstituicao("Emenda Constitucional nº 123/2024"));
console.log(deputadoEstadualPE2.criarcpi("CPI da Corrupção"));
const deputadoEstadualPE3 = new Depestadual("João Paulo Costa", "PCdoB", "Estadual", "Legislativo", "Assembleia Legislativa de Pernambuco", "Rua da União, Recife - PE", 33763, [
    "Projetos relacionados à saúde",
    "Propostas voltadas à população de Pernambuco"
], "Pernambuco", ["Saúde e Assistência Social", "Desenvolvimento Econômico"]);
console.log(deputadoEstadualPE3.getEstado());
console.log(deputadoEstadualPE3.getComissoes());
console.log(deputadoEstadualPE3.exercerMandato());
console.log(deputadoEstadualPE3.votarppa("PPA 2024-2027"));
console.log(deputadoEstadualPE3.votarloa("LOA 2024"));
console.log(deputadoEstadualPE3.votarldo("LDO 2024"));
console.log(deputadoEstadualPE3.proporemendaconstituicao("Emenda Constitucional nº 123/2024"));
console.log(deputadoEstadualPE3.criarcpi("CPI da Corrupção"));
const deputadoEstadualRJ1 = new Depestadual("Luiz Paulo", "PSD", "Estadual", "Legislativo", "Assembleia Legislativa do Estado do Rio de Janeiro", "Palácio Tiradentes - Rio de Janeiro/RJ", 33763, [
    "Projetos relacionados à infraestrutura",
    "Propostas relacionadas ao desenvolvimento do Rio de Janeiro"
], "Rio de Janeiro", ["Constituição e Justiça", "Transportes"]);
console.log(deputadoEstadualRJ1.getEstado());
console.log(deputadoEstadualRJ1.getComissoes());
console.log(deputadoEstadualRJ1.exercerMandato());
console.log(deputadoEstadualRJ1.votarppa("PPA 2024-2027"));
console.log(deputadoEstadualRJ1.votarloa("LOA 2024"));
console.log(deputadoEstadualRJ1.votarldo("LDO 2024"));
console.log(deputadoEstadualRJ1.proporemendaconstituicao("Emenda Constitucional nº 123/2024"));
console.log(deputadoEstadualRJ1.criarcpi("CPI da Corrupção"));
const deputadoEstadualRJ2 = new Depestadual("Lucinha", "PSD", "Estadual", "Legislativo", "Assembleia Legislativa do Estado do Rio de Janeiro", "Palácio Tiradentes - Rio de Janeiro/RJ", 33763, [
    "Projetos relacionados à saúde",
    "Propostas relacionadas ao saneamento"
], "Rio de Janeiro", ["Segurança Alimentar", "Saneamento Ambiental"]);
console.log(deputadoEstadualRJ2.getEstado());
console.log(deputadoEstadualRJ2.getComissoes());
console.log(deputadoEstadualRJ2.exercerMandato());
console.log(deputadoEstadualRJ2.votarppa("PPA 2024-2027"));
console.log(deputadoEstadualRJ2.votarloa("LOA 2024"));
console.log(deputadoEstadualRJ2.votarldo("LDO 2024"));
console.log(deputadoEstadualRJ2.proporemendaconstituicao("Emenda Constitucional nº 123/2024"));
console.log(deputadoEstadualRJ2.criarcpi("CPI da Corrupção"));
const senadorPE1 = new Senador("Fernando Antonio Caminha Dueire", "PSD", "Federal", "Legislativo", "Senado Federal", "Brasília - DF", 46366.19, [
    "Projetos relacionados à infraestrutura",
    "Propostas relacionadas ao desenvolvimento do Brasil"
], "Pernambuco", 2019);
console.log(senadorPE1.getEstado());
console.log(senadorPE1.getAnoeleicao());
console.log(senadorPE1.exercerMandato());
console.log(senadorPE1.aprovarAutoridades("Ministro da Educação"));
console.log(senadorPE1.julgarCrimesResponsabilidade());
console.log(senadorPE1.representarEstado("Pernambuco"));
const senadorPE2 = new Senador("Humberto Sérgio Costa Lima", "PT", "Federal", "Legislativo", "Senado Federal", "Brasília - DF", 46366.19, [
    "Projetos relacionados à saúde",
    "Propostas relacionadas às políticas sociais"
], "Pernambuco", 2019);
console.log(senadorPE2.getEstado());
console.log(senadorPE2.getAnoeleicao());
console.log(senadorPE2.exercerMandato());
console.log(senadorPE2.aprovarAutoridades("Ministro da Saúde"));
console.log(senadorPE2.julgarCrimesResponsabilidade());
console.log(senadorPE2.representarEstado("Pernambuco"));
const senadorRJ1 = new Senador("Carlos Eduardo de Sousa Portinho", "PL", "Federal", "Legislativo", "Senado Federal", "Brasília - DF", 46366.19, [
    "Projetos relacionados ao esporte",
    "Propostas relacionadas ao desenvolvimento do Rio de Janeiro"
], "Rio de Janeiro", 2019);
console.log(senadorRJ1.getEstado());
console.log(senadorRJ1.getAnoeleicao());
console.log(senadorRJ1.exercerMandato());
console.log(senadorRJ1.aprovarAutoridades("Ministro do Esporte"));
console.log(senadorRJ1.julgarCrimesResponsabilidade());
console.log(senadorRJ1.representarEstado("Rio de Janeiro"));
//# sourceMappingURL=index.js.map