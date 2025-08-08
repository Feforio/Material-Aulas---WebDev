function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇");
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}
//PUSH adiciona o elemento dentro dos ()

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}
//POP remove o ultimo elemento

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}
//SHIFT remove o primeiro elemento

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍓')
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}
//UNSHIFT aiciona elemento no começo da lista

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝");
  document.getElementById('resultado-includes').textContent = resultado;
}
// INCLUDES fala se é true ou false EX: essa lista inclui kiwi? = false
function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();
  document.getElementById('resultado-reverse').textContent = resultado;
}
//REEVERSE inverte a ordem

function executarSort() {
  const array = [3, 1, 4, 2,11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a,b) => b - a);
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
}
//SORT ordena em ordem crescente, REVERSE ordena em ordem decrescente

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

//ForEach mostra no console cada elemento
function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(pegaItem => console.log(pegaItem));
  document.getElementById('resultado-foreach').textContent = resultado;
}

//MAP mapeia e confirma os elementos
function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(pegaItem => `✅ ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map(pegaItem, index => {
      return `<h1> Item em promoção! </h1>
      <p> $(pegItem) </p>`})
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem == "🍎");
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaItem => pegaItem === "🍎");
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação findIndex';
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado =array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  },0);
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}




//Declarar um array
let nomes = ["Cario", 1, "Fulano"];
console.log(nomes[2])

//atualizar o valo de um item do array
nomes[2] = "Matheus Bidu"

//como saber o tamanho de um array
nomes.length

//////////
//funciton ordenar(a){
//  return a - 2
//}               //ambos sao iguais (funçôes)
const ordenar = a => a - 2
///////////