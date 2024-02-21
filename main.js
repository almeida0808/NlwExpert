const perguntas = [
  {
    pergunta:
      "Qual clube venceu mais vezes o Campeonato Brasileiro até o momento?",
    respostas: ["Palmeiras", "Santos", "São Paulo"],
    correta: 0,
  },
  {
    pergunta: "Qual clube é conhecido como 'Mengão'?",
    respostas: ["Grêmio", "Flamengo", "Internacional"],
    correta: 1,
  },
  {
    pergunta: "Quantos títulos brasileiros o Corinthians possui?",
    respostas: ["7", "6", "8"],
    correta: 0,
  },
  {
    pergunta: "Qual clube é chamado de 'Galo'?",
    respostas: ["Atlético Mineiro", "Atlético Paranaense", "Cruzeiro"],
    correta: 0,
  },
  {
    pergunta: "Quantas vezes o Santos FC foi campeão brasileiro?",
    respostas: ["7", "9", "8"],
    correta: 1,
  },
  {
    pergunta:
      "Qual é o clube mais antigo entre os participantes do Campeonato Brasileiro?",
    respostas: ["Fluminense", "Botafogo", "Bahia"],
    correta: 1,
  },
  {
    pergunta: "Qual clube é conhecido como 'Tricolor Paulista'?",
    respostas: ["Fluminense", "São Paulo", "Bahia"],
    correta: 1,
  },
  {
    pergunta: "Quantos títulos nacionais o Palmeiras possui?",
    respostas: ["10", "11", "12"],
    correta: 2,
  },
  {
    pergunta: "Em que ano o Cruzeiro foi campeão brasileiro pela última vez?",
    respostas: ["2013", "2014", "2015"],
    correta: 0,
  },
  {
    pergunta: "Qual clube é conhecido como 'Verdão'?",
    respostas: ["Internacional", "Coritiba", "Palmeiras"],
    correta: 2,
  },
];

const corretas = new Set();
const Resultado = document.getElementById("Resultado");

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const btnVerResultado = document.querySelector("#btnResult");
const resultado = document.querySelector("#Resultado");

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    const input = dt.querySelector("input");
    dt.querySelector("span").textContent = resposta;
    input.setAttribute("name", "pergunta-" + perguntas.indexOf(item));
    input.value = item.respostas.indexOf(resposta);

    input.onchange = (event) => {
      var respostaCorreta = event.target.value == item.correta;
      corretas.delete(item);
      if (respostaCorreta) {
        corretas.add(item);
      }
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();
  quiz.appendChild(quizItem);
}

btnVerResultado.addEventListener("click", mostrarResult);

function mostrarResult() {
  console.log(corretas.size);
  Resultado.classList.remove("hide");
  Resultado.querySelector(
    "span"
  ).textContent = `Você acertou ${corretas.size} de 10`;
}
