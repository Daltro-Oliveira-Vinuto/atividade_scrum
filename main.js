
import {Funcionario} from "./Funcionario.js"
import {Medico} from  "./Medico.js"
import {Secretaria} from "./Secretaria.js"
import {Especialidade} from "./Especialidade.js"


let newtonNome = "Newton"
let newtonId = 111
let newtonSalario =  10000
let newtonCRM = 77235
const medicoNewton = new Medico(newtonNome, newtonId, newtonSalario, newtonCRM)


let financasNome = "Galileu"
let financasidFuncioal = 222
let financasRamal = 6199998888
const secretariaFinancas = new Secretaria(financasNome, financasidFuncioal, financasRamal)


let cardiologiaNome = "cardiologia"
let cardiologiaCodigo = 999
let cardiologiaDescricao = "Cuidados cardiacos"
const especialidadeCardiologia = new Especialidade(cardiologiaNome,cardiologiaCodigo, cardiologiaDescricao);


medicoNewton.adicionarEspecialidade(especialidadeCardiologia);



// teste rapido da classe abstrata
//const novoFuncionario = new Funcionario("a", 111, 333);

console.log(especialidadeCardiologia)
console.log(medicoNewton)
console.log(secretariaFinancas)
console.log(secretariaFinancas.agenda)
