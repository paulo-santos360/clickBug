/*
-----------------------------------------------
    VARIÁVEIS E FUNÇÕES

*/

//LISTA COM OS INVASORES
let invasores = document.getElementsByClassName('invasor')
console.log('invasor')


//LISTA COM OS "BONZINHOS"
let bonzinhos = document.getElementsByClassName('bonzinho')


let score = 0

let tempoRestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth
console.log(larguraQuadro)
//declaração global para as variáveis posX e posY (posicionamento)
let posX, posY

//Função para posicionar um elemento
//recebe parâmetro el que informa o elemento
const posicElemento = (el) => {
    posX = Math.floor(Math.random()*1000)
    posY = Math.floor(Math.random()*400)
    el.style.position = 'absolute'
    el.style.left = posX+'px'
    el.style.top = posY+'px'

}
/* 
--------------------------------
EVENTOS E EXECUÇÕES AUTOMÁTICAS 
--------------------------------
*/

posicElemento(document.getElementById('inv1'))