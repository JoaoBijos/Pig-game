// pontuação inicial de cada jogador
var scores = [0,0];

// pontuação de cada rodada, como em cada rodada somente um jogador joga, precisamos de um valor somente 
var roundScore = 0;

// variável para mostrar qual player é o da rodada
var activePlayer = 0; // 0 = primeiro jogador, 1 = o segundo jogador 

// criando o dado
var dice = Math.floor(Math.random() * 6) + 1

// pegando um elemento HTML e alterando o seu conteúdo para o conteúdo do dado
// colocando o activePlayer, a ação será feita para quem estiver jogando
document.querySelector('#current--' + activePlayer).textContent = dice; 
