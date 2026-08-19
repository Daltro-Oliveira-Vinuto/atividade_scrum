# atividade_scrum

Implementação em JavaScript do sistema de gerenciamento de uma clínica médica, a partir do diagrama de classes UML fornecido, aplicando Herança, Encapsulamento, Polimorfismo, Classes Abstratas, Agregação e Composição. O desenvolvimento seguiu o framework **Scrum**, com apoio de um quadro **Kanban** no Trello para o controle do fluxo de trabalho.

## Autores

- Daltro Oliveira Vinuto — daltroov777@gmail.com
- Kyara Esteves de Sousa — shadoxkan@gmail.com
- Edilson Nery Barbosa — edilson201611@gmail.com

## Papéis (Scrum Team)

| Papel | Estudante |
|---|---|
| Cliente / Stakeholder | Tiago Segato |
| Product Owner | Kyara Esteves de Sousa |
| Scrum Master | Edilson Nery Barbosa |
| Dev Team | Daltro Oliveira Vinuto |

## Kanban

Quadro: https://trello.com/b/Cc7uw2IY

Colunas utilizadas: **A Fazer**, **Fazendo**, **Feito**. Cada cartão representa uma tarefa do backlog (ex.: "Implementar classe Funcionario", "Testar agregação Médico–Especialidade"), permitindo visualizar gargalos e o progresso do time em tempo real.

## Entregas — organização e periodização das Sprints e Dailys

O time trabalhou em 2 Sprints curtas:

### Sprint 1 — realizada durante a aula (bloco de 3h, presencial)

| Horário (aprox.) | Atividade |
|---|---|
| 0h00–0h20 | Sprint Planning: leitura do enunciado, definição dos papéis do Scrum Team e criação do quadro Kanban |
| 0h20–0h30 | Daily #1 (abertura) |
| 0h30–2h00 | Desenvolvimento das classes `Funcionario` (abstrata), `Medico`, `Secretaria`, `Agenda` e `Especialidade`, em pair programming (Daltro no teclado, Edilson navegando/revisando) |
| 2h00–2h10 | Daily #2 (meio da aula) |
| 2h10–2h50 | Continuação da implementação e primeiros testes manuais em `main.js`, mantendo o pair programming Daltro/Edilson |
| 2h50–3h00 | Daily #3 + Sprint Review rápida de fechamento da aula |

### Sprint 2 — realizada fora da aula (assíncrona, via Trello e GitHub)

Dailys assíncronas: cada integrante respondia no cartão do Trello correspondente às 3 perguntas do Scrum (o que fiz / o que farei / impedimentos), substituindo a reunião diária presencial. Parte da programação desta Sprint foi feita em pair programming remoto entre Daltro e Kyara (chamada de vídeo com tela compartilhada).

| Atividade | Responsável |
|---|---|
| Correção do erro no atributo `ramal` da Secretaria | Daltro |
| Teste de `getSalario`/`setSalario` do Médico | Daltro |
| Correção do bug em `Especialidade.obterDetalhes()` (`this.descricao`) | Daltro |
| Ajuste da Agregação (Médico ↔ Especialidade) e Composição (Secretaria ↔ Agenda) para coleções (arrays), em pair programming remoto | Daltro e Kyara |
| Testes de Abstração e Polimorfismo em `main.js`, em pair programming remoto | Daltro e Kyara |
| Testes de Agregação e Composição em `main.js` | Daltro |
| Organização e priorização dos cartões no Kanban | Kyara |
| Validação dos critérios de aceite frente ao diagrama UML | Kyara |
| Condução das Dailys e remoção de impedimentos (dúvidas de sintaxe JS) | Edilson |
| Redação e revisão do README e da documentação de entrega | Edilson |
| Feedback sobre os requisitos do sistema na Sprint Review | Tiago |
| Link do quadro Kanban adicionado ao README | Daltro |

Sprint Review + Retrospective final: revisão conjunta do código, dos testes e da documentação antes do envio.

## Como executar

```bash
node main.js
```

O script `main.js` executa 5 cenários de teste: Abstração, Herança/Encapsulamento, Polimorfismo, Agregação e Composição.

## Conclusões

**Pontos positivos:** melhor organização do trabalho e distribuição das tarefas entre os integrantes; o Trello permitiu acompanhar o andamento e a velocidade das entregas, e acelerar o processo quando necessário.

**Pontos negativos:** pouca experiência prévia do time com o Trello — o potencial da ferramenta é grande e não houve tempo hábil para explorar todas as suas funcionalidades.