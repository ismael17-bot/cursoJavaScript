


window.onload= function(){

    document.getElementById("botao").onclick=function(){
        var ajax= new XMLHttpRequest();
        ajax.onreadystatechange= function(){
            if(ajax.readyState==4){
                alert(" requisição chegou");
            }
        }
        ajax.open("POST","..imagens\Estrexeçoes.txt", true);

        return false
    }

}