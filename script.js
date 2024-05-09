const aperta = document.getElementById("jumpBT");
const jogador = document.getElementById("player");
const zombie =document.getElementById("zombie")
let animation;
const pipe = document.getElementById("pipe");

const telaGame = document.getElementById("container");
const telaMenu = document.getElementById("container-menu");
const botaoPlay = document.getElementById("iniciarGame");


telaGame.style.display = "none"


function iniciarAnimacao() {
jogador.style.animationName = "pulo-player"
jogador.style.animationDuration = "1s"
jogador.style.animationIterationCount = "infinite"
jogador.style.animationTimingFunction = "ease-out"

}

function pausaAnimacao() {
jogador.style.animation = "none"
clearTimeout(animation);
}

aperta.addEventListener("click", ()=>{
  iniciarAnimacao()
  animation = setTimeout(pausaAnimacao, 1000)
})

  zombie.style.animation = "none"
  
const looop = setInterval(()=>{
  const pipePosition = pipe.offsetLeft;
  const jogadorPosition = +window.getComputedStyle(jogador).bottom.replace("px",'')
 

  if(pipePosition <= 315 && pipePosition > 300 && jogadorPosition < 150){
    
    pipe.style.animation = "none";
    pipe.style.left = '${canoPosition}px'
    pipe.style.left = "300px"
    
    zombie.style.animation = "block"
    zombie.style.animationName = "zombie-anima"
    zombie.style.animationDuration = "2s"
    zombie.style.left = "250px"
    
    aperta.style.display = "none"
    

  }
  
},10)


function iniciarJogo() {
  telaGame.style.display = "block";
  
}
function sairMenu() {
  telaMenu.style.display = "none";
  
}

botaoPlay.addEventListener("click", ()=>{
  iniciarJogo();
  sairMenu();
})


 // sistema de tempo de jogo 
let cout = 0
const couterElemento = document.getElementById("tempo-game");

function updateTempo() {
  couterElemento.innerText = cout;
  cout++
}
setInterval(updateTempo, 500)
//fim do sistema de tempo  
