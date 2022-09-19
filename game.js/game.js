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
        //verifica se o elemento saiu do quadro 
        //ou se foi clicado (classe "morto")
        //retorna para uma posição 
        //á esquerda do quadro (re-entra)
        
       

        if(veloc > larguraQuadro || el.classList.contains('morto')){
           //sorteia um valor entre -
            veloc = -Math.random()*450+50
            inc = Math.random()*140+10
            posicElemento(el)
            el.classList.remove('morto')
        }
        //Adiciona atributo velocidade para
        //consulta do codigi js
        el.setAttribute('velocidade', inc)
    }, 40);
}


//ao clicar nos insetos
const clickBug = (el)=>{
    //Adiciona a classe "morto" ao inseto
    el.classList.add('morto')
    //Adiciona 10 pts ao score
    score += 10
    //SE O INSETO CLICADO FOR BPNZINHO PERDE 50 PONTOS
    if(el.classList.contains('bonzinhos')){
        score -= 60
    }
    document.getElementById('score').innerText = score

    //Se velocidade for maior que 20, faz 100 pontos
    //apenas nos insertos que tenham a classe "invasor"
    if(el.getAttribute('velocidade')>20 && el.classList.contains('invasor')){
        score+=100
        //mostra +100 pontos por 1/2 segundo
        let pts100 = document.getElementById('pts100')
        pts100.style.left = el.style.left
        pts100.style.left = el.style.top
       /*  const mostra100pts = setInterval(()=>{
            pts100.style.left = '-300px'
            //interrompe o setInterval
            clearInterval(mostra100pts)
        },500); */
        const mostra100pts = setTimeout(() => {
            pts100.style.left = '-300px'
        },500);
    }
}



for(inv of invasores){
    posicElemento(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19+1)
    //evt.target = elemento q executa o evento - inseto clicado
    inv.addEventListener('mousedown', (evt)=>{clickBug(evt.target)})
}

for(bom of bonzinhos){
    posicElemento(bom)
    moveElemento(bom, Math.random()*10, Math.random()*19+1)
    bom.addEventListener('mousedown', (evt)=>{clickBug(evt.target)})
}

//Contagem regressiva
setTimeout(() => {
    //Avisa ao usuario o fim do tempo
    alert('Tempo Esgotado!!')
    //Recarrega a pagina - semelhante a f5
    location.reload(true);

}, tempoRestante*1000);

    const mostraTempo = setInterval(() => {
        //mostra tempo restante
        document.getElementById('infoTR').innerText = tempoRestante
        document.getElementById('temporest').innerText = tempoRestante --
    }, 1000);


//moveElemento(document.getElementById('inv1'), 5, 5)



