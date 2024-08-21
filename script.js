const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
  {
    enunciado: "A mudança climática é um desafio crescente em muitos países?",
    alternativas: [
        {
            texto: "Sim, a mudança climática está se tornando um desafio maior em muitos países.",
            afirmacao: "A mudança climática é um desafio crescente em muitos países.",
        },
        {
            texto: "Não, a mudança climática não está se tornando um desafio maior em muitos países.",
            afirmacao: "A mudança climática não é um desafio crescente em muitos países.",
        }
    ]
},
{
    enunciado: "As escolas brasileiras adotarão práticas de sustentabilidade em suas atividades diárias?",
    alternativas: [
        {
            texto: "Sim, as escolas brasileiras adotarão práticas de sustentabilidade em suas atividades diárias.",
            afirmacao: "As escolas brasileiras adotarão práticas de sustentabilidade em suas atividades diárias."
        },
        {
            texto: "Não, as escolas brasileiras não adotarão práticas de sustentabilidade em suas atividades diárias.",
            afirmacao: "As escolas brasileiras não adotarão práticas de sustentabilidade em suas atividades diárias."
        }
    ]
},
{
    enunciado: "Haverá um maior incentivo ao transporte público nas grandes cidades brasileiras?",
    alternativas: [
        {
            texto: "Sim, haverá um maior incentivo ao transporte público nas grandes cidades brasileiras.",
            afirmacao: "Haverá um maior incentivo ao transporte público nas grandes cidades brasileiras."
        },
        {
            texto: "Não, não haverá um maior incentivo ao transporte público nas grandes cidades brasileiras.",
            afirmacao: "Não haverá um maior incentivo ao transporte público nas grandes cidades brasileiras."
        }
    ]
},
{
    enunciado: "As políticas ambientais contribuirão para a preservação das florestas tropicais?",
    alternativas: [
        {
            texto: "Sim, as políticas ambientais contribuirão para a preservação das florestas tropicais.",
            afirmacao: "As políticas ambientais contribuirão para a preservação das florestas tropicais."
        },
        {
            texto: "Não, as políticas ambientais não contribuirão para a preservação das florestas tropicais.",
            afirmacao: "As políticas ambientais não contribuirão para a preservação das florestas tropicais."
        }
    ]
},
{
    enunciado: "Os governos incentivarão a utilização de energias renováveis nas áreas urbanas?",
    alternativas: [
        {
            texto: "Sim, os governos incentivarão a utilização de energias renováveis nas áreas urbanas.",
            afirmacao: "Os governos incentivarão a utilização de energias renováveis nas áreas urbanas."
        },
        {
            texto: "Não, os governos não incentivarão a utilização de energias renováveis nas áreas urbanas.",
            afirmacao: "Os governos não incentivarão a utilização de energias renováveis nas áreas urbanas."
        }
    ]
 },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
