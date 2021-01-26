/*
Autor: Ismael 
Função:acender()
descrição:aqui estou fazendo um curso de javaScript
aprendendo a usar aquivos externos.
aqui tem a definição de uma função 
e tbm tem tipos de variaveis 
var string="kaskdfak"
var number=31
var boolean=true or false
tem tbm 
var b=infinity+-
var b= null
var nome="ismael";
    const HORAS_DO_DIA=24;//a constante e para uma variavel que não pode ser alterado;
*/
window.onload=function(){
    document.getElementById("lampada").onclick= acender;
    setInterval(apresentaHoras,1000);
    var name=readCookie("name");
    if (name==null) {
        nome=prompt("Qual seu nome ?");
        writeCookie("name",nome,1);
    }
    
    
    
}

function acender(){
    
    //const HORAS_DO_DIA=24;//a constante e para uma variavel que não pode ser alterado;
    var name=readCookie("name");
    if (name==null) {
        alert("Prazer em conhecer você "+nome);
    }
    document.getElementById("lampada").src="../projeto/Html-css/projeto-glass-html5/_imagens/lampada-acesa.jpg";
    setTimeout("desliga()",3000);//temporizador
}

function desliga (){

    document.getElementById("lampada").src="../projeto/Html-css/projeto-glass-html5/_imagens/lampada-apagada.jpg";
}

function apresentaHoras(){
    var agora= new Date();
    var hora=agora.getHours()+":"+agora.getMinutes()+":"+agora.getSeconds();
    document.getElementById("horas").innerHTML=hora;
}