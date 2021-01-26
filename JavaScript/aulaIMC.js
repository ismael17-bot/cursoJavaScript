 function calcularIMC(){
  var form=document.getElementById("formulario");
    var kilos=parseInt(formulario.kilos.value);
    var metros=parseInt( formulario.metros.value);
    var cm=parseInt(formulario.centimetros.value);
    var altura= (metros*100+cm)/100;
    
    var imc=kilos/(altura*altura);
    formulario.imc.value=imc.toFixed(3);
 }