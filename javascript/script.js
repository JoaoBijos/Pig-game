// pontuação inicial de cada jogador
var scores = [0,0];

// pontuação de cada rodada, como em cada rodada somente um jogador joga, precisamos de um valor somente 
var roundScore = 0;

// variável para mostrar qual player é o da rodada
var activePlayer = 0; // 0 = primeiro jogador, 1 = o segundo jogador 


// pegando um elemento HTML e alterando o seu conteúdo para o conteúdo do dado
// colocando o activePlayer, a ação será feita para quem estiver jogando
// document.querySelector('#current--' + activePlayer).textContent = dice; 


// pegamos a imagem do dado e fazemos com que ela não apareça quando o jogo for aberto
document.querySelector('.dice').style.display = 'none';

// recupera o valor do score total
document.getElementById('score--0').textContent = 0
document.getElementById('score--1').textContent = 0
document.getElementById('current--0').textContent = 0
document.getElementById('current--1').textContent = 0


function nextPlayer() {
    // passa a vez 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

        // zerar a pontuação da rodada
        roundScore = 0;
        document.getElementById('current--0').textContent = '0'
        document.getElementById('current--1').textContent = '0'

        // mostrando quem é o player atual 
        // toggle tira a class se ela estiver lá, e coloca se não estiver; 
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
}


function btn(){
    console.log('ksjbfkdjsa')
    // 1 - precisamos de um número aleatório 
    // criando o dado
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2 - mostrar o resultado
    // recuperando o elemento HTML
    var diceDOM =  document.querySelector('.dice');
    // tornando ele visível
    diceDOM.style.display = 'block';
    // alternando as imagens do dado
    diceDOM.src = './img/dice-' + dice + '.png';

    // 3 - atualizar a pontuação da rodada se o número não for 1 
    if(dice !== 1){
        // adiciona pontos 
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else{
        // passa a vez 
        nextPlayer();
    }
}

// fazendo a funcionalidade do botão roll dice
// o addEventListener é o que vai dar as funcionalidades ao botão 
// declaramos que o tipo do nosso evento será um 'click'
// após isso declaramos qual funçào deverá ser realizada quando o evento acontecer
document.querySelector('.btn--roll').addEventListener('click', btn)


function hold(){
    // somar a pontuação da rodada com a pontuação total
    scores[activePlayer] += roundScore;

    // mostra a pontuação global atualizada 
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

    // verificar se o jogador ganhou o jogo
    if (scores[activePlayer] >= 30) {
        document.querySelector('#name--' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none'
    } else {
        // passa a vez 
         nextPlayer();
    }
}

document.querySelector('.btn--hold').addEventListener('click', hold)


function newgame(){ 
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
}


document.querySelector('.btn--new').addEventListener('click', newgame)