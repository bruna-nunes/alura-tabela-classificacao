var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var rafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [paulo, rafa];

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calcularPontos(jogadores[i]);
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      "<td class='tdAcoes'><button class='btnVitoria' onClick='adicionarVitoria(" +
      i +
      ")'> + vitória</button>";
    html +=
      "<button class='btnEmpate' onClick='adicionarEmpate(" +
      i +
      ")'>+ empate</button>";
    html +=
      "<button class='btnDerrota' class='btnDerrota' onClick='adicionarDerrota(" +
      i +
      ")''>+ derrota</button></td></tr>";
  }
  var tabelasJogadores = document.getElementById("tabelaJogadores");
  tabelasJogadores.innerHTML = html;
  console.log(html);
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}

function cadastrarJogador() {
  var nome = document.getElementById("inputNome").value;
  if (nome == "") {
    alert("Preencha o nome");
  } else {
    var vitorias = document.getElementById("inputVitorias").value;
    var empates = document.getElementById("inputEmpates").value;
    var derrotas = document.getElementById("inputDerrotas").value;
    vitorias = vitorias == "" ? 0 : parseInt(vitorias);
    empates = empates == "" ? 0 : parseInt(empates);
    derrotas = derrotas == "" ? 0 : parseInt(derrotas);
    var jogador = {
      nome: nome,
      vitorias: vitorias,
      empates: empates,
      derrotas: derrotas,
      pontos: 0
    };
    jogadores.push(jogador);
    exibirJogadoresNaTela(jogadores);
    nome = "";
  }
  document.getElementById("inputNome").value = "";
  document.getElementById("inputVitorias").value = "";
  document.getElementById("inputEmpates").value = "";
  document.getElementById("inputDerrotas").value = "";
}

exibirJogadoresNaTela(jogadores);