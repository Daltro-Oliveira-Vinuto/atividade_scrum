import {Funcionario} from "./Funcionario.js"
import {Medico} from "./Medico.js"
import {Secretaria} from "./Secretaria.js"
import {Especialidade} from "./Especialidade.js"

console.log("====== Teste 1: Abstracao (Funcionario nao pode ser instanciada) ======")

try {
    const novoFuncionario = new Funcionario("a", 111, 333);
} catch (erro) {
    console.log(`Erro esperado capturado: ${erro.message}`)
}

console.log("\n====== Teste 2: Heranca e Encapsulamento ======")

let newtonNome = "Newton"
let newtonId = 111
let newtonSalario = 10000
let newtonCRM = 77235
const medicoNewton = new Medico(newtonNome, newtonId, newtonSalario, newtonCRM)

let financasNome = "Galileu"
let financasidFuncioal = 222
let financasSalario = 500000
let financasRamal = 6199998888
const secretariaFinancas = new Secretaria(financasNome, financasidFuncioal, financasSalario, financasRamal)

console.log(`Salario inicial do medico ${medicoNewton.nome}: R$ ${medicoNewton.getSalario()}`)
medicoNewton.setSalario(12000)
console.log(`Salario atualizado do medico ${medicoNewton.nome}: R$ ${medicoNewton.getSalario()}`)

console.log("\n====== Teste 3: Polimorfismo ======")

const funcionarios = [medicoNewton, secretariaFinancas]

for (const funcionario of funcionarios) {
    console.log(`${funcionario.nome} -> ${funcionario.descreverFuncao()}`)
}

console.log("\n====== Teste 4: Agregacao (Medico e Especialidade) ======")

let cardiologiaNome = "cardiologia"
let cardiologiaCodigo = 999
let cardiologiaDescricao = "Cuidados cardiacos"
const especialidadeCardiologia = new Especialidade(cardiologiaNome, cardiologiaCodigo, cardiologiaDescricao);

let clinicaGeralNome = "clinica geral"
let clinicaGeralCodigo = 111
let clinicaGeralDescricao = "Atendimento clinico geral"
const especialidadeClinicaGeral = new Especialidade(clinicaGeralNome, clinicaGeralCodigo, clinicaGeralDescricao);

medicoNewton.adicionarEspecialidade(especialidadeCardiologia);
medicoNewton.adicionarEspecialidade(especialidadeClinicaGeral);

especialidadeCardiologia.obterDetalhes();
especialidadeClinicaGeral.obterDetalhes();

console.log(medicoNewton)

console.log("\n====== Teste 5: Composicao (Secretaria e Agenda) ======")

let agendamento1Data = "25/12/2026"
let agendamento1Descricao = "Preparar cirurgia"
let agendamento1Responsavel = "Newton"
secretariaFinancas.criarAgendamento(agendamento1Data, agendamento1Descricao, agendamento1Responsavel)

let agendamento2Data = "26/12/2026"
let agendamento2Descricao = "Retorno pos-cirurgico"
let agendamento2Responsavel = "Newton"
secretariaFinancas.criarAgendamento(agendamento2Data, agendamento2Descricao, agendamento2Responsavel)

console.log(secretariaFinancas)
console.log(`Total de agendamentos criados: ${secretariaFinancas.agendas.length}`)