import {Presidente} from "./presidente.js";
import {Depestadual} from "./depestadol.js";
import {Senador} from "./senadores.js"
import {Governador} from "./Governador.js"
import {deputadofederal} from "./deputadofederal.js"

const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "LEGISLATIVA",
    "LEGISLATIVO",
    "Palácio do Planalto",
    "Praca dos Três Poderes - Brasília/DF",
    50000,
    ["Bolsa Familia", "ProUni", "CadUnico"],
    10
);

const governador1 = new Governador(
    "João Silva",
    "Partido X",
    "Estadual",
    "Executivo",
    "Palácio do Governo",
    "Rua Principal",
    15000,
    ["Projeto 1", "Projeto 2"],
    "Pernambuco"
);

const deputadoFederal1 = new deputadofederal(
    "Maria Oliveira",
    "Partido Y",
    "Federal",
    "Legislativo",
    "Palácio dos Deputados",
    "Avenida Principal",
    20000,
    ["Projeto 3", "Projeto 4"],
    "Bancada Z"
);