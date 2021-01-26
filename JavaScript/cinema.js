
//true =disponivel
//false= indisponivel
window.onload=function(){
    carregarPoltrona ();

   
    var imagem=document.getElementsByTagName("img");
    for(var i=0;i<imagem.length;i++){
        imagem[i].onclick=verificaPoltrona(i);
    }
}
var poltronas = [false, true ,false, true,true,true,false,true];

function carregarPoltrona (){
    var imagens=document.getElementsByTagName("img");
    for (var i=0;i<imagens.length;i++){
        if(poltronas[i]){
            imagens[i].src="imagens/kisspng-chair-cinema-computer-icons-vector-red-sofa-5aac619d940b39_page-0001.jpg";
        }else{
            imagens[i].src="imagens/kisspng-chair-cinema-computer-icons-vector-red-sofa-5aac619d940b39.5660352715212466216064.jpg"
        }
    }

} 

function selecionaPoltrona(){
    var imagens=document.getElementsByTagName("img");
    alert("A poltrona que selecionar ficará vermelha");
    for(var i=0;i<poltronas.length;i++){
        if(poltronas[i]){
            imagens [i].src="imagens/kisspng-chair-cinema-computer-icons-vector-red-sofa-5aac619d940b39.5660352715212466216064.jpg";

            var quer= confirm("Você quer essa poltrona ?");
            if (quer) {
                
                break;
            }else{
                imagens[i].src="imagens/kisspng-chair-cinema-computer-icons-vector-red-sofa-5aac619d940b39_page-0001.jpg";
            }
            
        }
    }
}

function verificaPoltrona(poltronas){
    return function (){
        var src=document.getElementsByTagName("img")[poltronas].src;
        var msg="";
        if (src.indexOf("imagens/kisspng-chair-cinema-computer-icons-vector-red-sofa-5aac619d940b39_page-0001.jpg")>0) {
            msg="Poltrona disponivel";
        }else if (src.indexOf("imagens/kisspng-chair-cinema-computer-icons-vector-red-sofa-5aac619d940b39.5660352715212466216064.jpg")>0) {
            msg="Poltrona indisponivel";
        }else{
            msg="essa poltrona e sua";
        }
    alert(msg);
    }
}
