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

//Função para posicionar um elemento
//recebe parâmetro el que informa o elemento
const posicElemento = (el) => {
    let posX = Math.floor(Math.random()*1000)
    let posY = Math.floor(Math.random()*400)
    el.style.position = 'absolute'
    el.style.left = -posX+'px'
    el.style.top = posY+'px'

}
/* 
--------------------------------
EVENTOS E EXECUÇÕES AUTOMÁTICAS 
--------------------------------
*/

//desloca os elementos na tela
//recebe parâmetros elementos, velocidade, incremento

const moveElemento = (el, veloc, inc)=> {

    //executa a cada x milessegundos
    const anima = setInterval(()=>{

        veloc = veloc + inc
        el.style.left = veloc +'px'
        //verifica se o elemento saiu do quadro e possui a
        //classe emtela
        //remove a classe e volta para uma posição inicial

        if(veloc > larguraQuadro && el.classList.cont('emtela')){
            el.classList.remove('emtela')
            posicElemento(el)
        }
    }, 40);
}











for(inv of invasores){
    posicElemento(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19+1)
}


moveElemento(document.getElementById('inv1'), 5, 5)