/* https://www.w3schools.com/js/js_objects.asp string
*/
//objeto arrey
alert("OIII");
var frutas=["maracuja","banana","uva","melancia","melão","LARANJA"];
 function todos(elem,ind,obj){
     return(typeof elem=="string");
 }

 function retorna(elem,ind,obj){
    return(elem.indexOf("an")>0);
}
 //testa os elementos e retorna true e false
 alert(frutas.every(todos));

 //verifica se um elemento é number
 alert(frutas.some(todos));


//filtra e retorna um novo array
 alert(frutas.filter(retorna));


 function altera(elem,ind,obj){
    return(elem=elem.toUpperCase());
}
alert(frutas.map(altera));
// var pessoas=new Array
// [
//     ["ismael","masculino"]
//     ["sandra","feminino"]
// ];
// alert(pessoas[0][0]);

// var pessoa={nome:"ismael",cidade:"joinville"};
// alert(pessoa.nome);
// alert(pessoa["cidade"]);






//var paises = new Array("brasil","argentina","china","alemanha");
//chave=valor
//0="brasil"
//mostra a posição
// alert(paises.indexOf("argentina"));
// alert(paises.reverse());
// alert(paises.sort());
// alert(paises.join(" "));
// alert(paises.concat("EUA","Africa"));

// alert(paises.slice(2));
// //subistitui e coloca no lugar
// alert(paises.splice(2,2,"japao","australia"));
// alert(paises);

// alert(paises.push("Paris"));//adiciona um no final da fila 
// alert(paises);
// alert(paises.shift());//remove
// alert(paises);


