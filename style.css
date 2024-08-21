const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O desemprego é um problema crescente em muitas economias?",
        alternativas: [
            {
                texto: "Sim, o desemprego está aumentando em várias economias.",
                afirmacao: "O desemprego é um problema crescente em muitas economias.",
            },
            {
                texto: "Não, o desemprego não está aumentando em várias economias.",
                afirmacao: "O desemprego não é um problema crescente em muitas economias.",
            }
        ]
    },
    {
        enunciado: "As escolas brasileiras integrarão a tecnologia nas aulas de ensino religioso?",
        alternativas: [
            {
                texto:  "Sim, as escolas brasileiras integrarão a tecnologia nas aulas de ensino religioso.",
                afirmacao: "As escolas brasileiras integrarão a tecnologia nas aulas de ensino religioso."
            },
            {
                texto: "Não, as escolas brasileiras não integrarão a tecnologia nas aulas de ensino religioso.",
                afirmacao: "As escolas brasileiras não integrarão a tecnologia nas aulas de ensino religioso."
            }
        ]
    },
    {
        enunciado: "Haverá um maior diálogo inter-religioso nas escolas brasileiras?",
        alternativas: [
            {
                texto: "Sim, haverá um maior diálogo inter-religioso nas escolas brasileiras.",
                afirmacao: "Haverá um maior diálogo inter-religioso nas escolas brasileiras."
            },
            {
                texto: "Não, não haverá um maior diálogo inter-religioso nas escolas brasileiras.",
                afirmacao: "Não haverá um maior diálogo inter-religioso nas escolas brasileiras."
            }
        ]
    },
    {
        enunciado: "O ensino religioso contribuirá para a formação de cidadãos mais tolerantes e respeitosos?",
        alternativas: [
            {
                texto: "Sim, o ensino religioso contribuirá para a formação de cidadãos mais tolerantes e respeitosos.",
                afirmacao: "O ensino religioso contribuirá para a formação de cidadãos mais tolerantes e respeitosos."
            },
            {
                texto: "Não, o ensino religioso não contribuirá para a formação de cidadãos mais tolerantes e respeitosos.",
                afirmacao: "O ensino religioso não contribuirá para a formação de cidadãos mais tolerantes e respeitosos."
            }
        ]
    },
    {
        enunciado: "As políticas públicas incentivarão a inclusão do ensino religioso no currículo escolar?",
        alternativas: [
            {
                texto: "Sim, as políticas públicas incentivarão a inclusão do ensino religioso no currículo escolar.",
                afirmacao: "As políticas públicas incentivarão a inclusão do ensino religioso no currículo escolar."
            },
            {
                texto: "Não, as políticas públicas não incentivarão a inclusão do ensino religioso no currículo escolar.",
                afirmacao: "As políticas públicas não incentivarão a inclusão do ensino religioso no currículo escolar."
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
