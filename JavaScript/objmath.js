


//alert(Math.max(2,5,78,90));
// alert(Math.abs(-3.7));
// alert(Math.min(2,5,78,90));
// alert(Math.round(3.8));
// alert(Math.pow(2,4));
// alert(Math.sqrt(25));
// alert(Math.random()*10);
// alert(Math.exp(3));
// alert(Math.log(3));
//sen cos tan asin acos atan arco em rad.

/*FUNÇÕES E MODIFICADORES */
//expreçoes regulares
// var regex=/ismael/i;   esse i ignora letras minusculas e maiusculas
// var regex=new RegExp("ismael");
// var string="ismael";
// alert(regex.test(string));

//exec =serve pra porcurar uma palavra dentro de uma frase 
// se usar g ele ve as palavas iguais 


// var string="oi mundo lindo, pena que acaba esse mundonviva mundo alala mundo";
// alert(/mundo/ig.exec(string));
// alert(string.match(/mundo/ig));

//METACARACTERES
// alert(/./.test(""));//algum caracerte
//alert(/\w/.test("")); a-z e de 0-9 e _
//alert(/\w/.test(""));//procura espaços entre a frase etc
//alert(/\d/.test("")); procura digitos
//alert(/^21/.test("")); procura a ocorrencia no inicio da frase
//alert(/21$/.test("")); procura a ocorrencia no final da frase

// DIGAMOS PRA INDENTIFICAR UM CEP
//  alert(/^\d\d\d\d\d-\d\d\d$/.test("70098-980"));
//  alert(/^\d{5}-{3}$/.test("70098-980"));


//QUANTIFICADORES
// alert(/\d*/.test("")) procura a ocorrencia de 0 ou mais digitos 
// alert(/\d+/.test("")) procura a ocorrencia de 1 ou mais digitos 
// alert(/\d?/.test("")) procura a ocorrencia de 0 ou 1
// alert(/\d{3}/.test("")) procura total indicado 

// alert(/^\d{2}\/\d{2}\/\d{2,4}$/.test("17/03/2001"));
// alert(/\w+@\w+\.\w{2,3}/.test("ismaeltoledodemedeiros@gmail.com"));

/*CARACTERES OPCIONAIS */

// var string="oi mundo lindo, pena que acaba esse mundo viva mundo alala mundo";
// alert(string.match(/mundo/ig));
// alert(string.replace(/mundo/ig,"jaca"));

function validar(){
    var formulario=document.getElementById("formulario");
    var cpf=formulario.cpf;
    var email=formulario.email;

    var re_cpf=/^([\d]{3})([\d]{3}) ([\d]{3}) ([\d]{2})$/; 
    var re_email= /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;

    if (re_cpf.test(cpf.value)) {
        cpf.value = cpf.value.replace(re_cpf,"$1.$2.$3-$4");
        
    }else{
        alert("cpf invalido");
    }

    if (!re_email.test(email.value)) {
        alert("email invalido");
        
    }else{
        alert("email valido");
    }

}
