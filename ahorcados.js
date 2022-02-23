var diccionary = [
    "maduro", "electron", "deligar", "azul",
    "pobre", "trapo", "hojalata", "caramelo",
    "chocolate", "empalme", "aciete", "arroz",
    "licuadora", "equipo", "laguna", "temperatura",
    "infierno", "cielo", "dinero", "busqueda",
    "objetivo", "sueño", "lagartija", "patron",
    "tecnologia", "secreto", "abundancia", "brillante",
    "alma", "posicion", "aventura", "multa", "muleta",
    "estopa", "jauria", "incremento", "tesoro",
    "juventud", "especial", "oracion", "perseverar",
    "llegar", "irse", "jugar", "estadia", "pelea", "atajo",
    "abrazar", "sentimiento", "acuario", "saltar", "leon", "aturdio",
    "entrada", "salida", "armar", "tratamiento", "saltamontes"];
var wordSecret = ""; 
var guessWord = ""; 
var lifes = 6;
var letter;
var userLetters ="";
var wrongLetters = [];
var reloadNew = document.getElementById("start");
window.onload=startPage();
function startPage(){
    document.getElementById("validateCont").style.display = "none";
};


document.getElementById("start").addEventListener("click",start)
document.getElementById("validate").addEventListener("click",validate)
document.getElementById("desist").addEventListener("click", reload);
function start(){
    const context = canvas.getContext('canvas');
    context.clearRect(0, 0, canvas.width, canvas.height);

    document.getElementById("word").innerHTML = '';
    reloadNew.style.display= "none";
    document.getElementById("validateCont").style.display = "block";
    wordSecret = diccionary[Math.floor(Math.random()*diccionary.length)];
    for(let i = 0; i < wordSecret.length; i++){
        guessWord +="_ ";
    }
    document.getElementById("word").innerHTML = guessWord;
}

function validate(){
    letter = document.getElementById("letter").value.toUpperCase();
    userLetters = letter;
    console.log(userLetters);
    wordSecret = wordSecret.toUpperCase();  
    var nuevo ="";
    for(let i = 0; i < wordSecret.length; i++){
        if(userLetters == wordSecret[i] ){
            console.log(wordSecret[i])
            nuevo += userLetters + " ";
    
        }else{
            nuevo += guessWord[i*2] + " ";   
                  
              } 
       if(nuevo == guessWord){
           wrongLetters.push(userLetters);
           lifes --;
           letrasFall();
       }
       
    }
    
    if(lifes == 0){
        loser();
        document.getElementById("validateCont").style.display = "none";
        reloadNew.style.display= "flex";
    }
    drawGuess(lifes);
    
    guessWord = nuevo;
    document.getElementById("word").innerHTML = guessWord;
    if(guessWord.search("_") == -1){
        win();
    }
    deleteLetter();
} 

function drawGuess(num){
    switch(num){
        case 5 :
            dibujarCabeza();
            break;
        case 4 :
            dibujarTorzo();
            break;
        case 3 :
            dibujarBrazoDer();
            break;
        case 2 :
            dibujarBrazoiz();
            break;
        case 1 :
            dibujarPiernaDer();
            break;
        case 0 :
            dibujarPiernaIzq();
            break;
        
    }
};
function deleteLetter(){
    document.getElementById("letter").value = '';
}
function reload(){
    location.reload(true);
   
    reloadNew.style.visibility ="visible";
}