function writeCookie(){
    var expires="";

    //especifica o numero de dias para guardar o cookies 
    if(days){
        var date=new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires="; expires="+date.toDateString();
    }
    if (value!=""&& value !=null && value!="null") {
        // define o cookie com o nome, valor e dara de expiração
        document.cookie= name +"="+value+expires+"; path=/";
    }
}

function readCookie(){
 //encontra o cookie especificado 
     var searchName= name+"=";
     var cookies= document.cookie.split(';');
        for (var i=0;i<cookies.length;i++) {
            var c= cookies[i];
            while(c.charAt(0)==' '){
                c=c.substring(1,c.length);
                if(c.indexOf(searchName)==0){
                return c.substring(searchName.length,c.length); 
                }
            }
            
        }
    return null;
}

function eraseCookie(name){
    //exclui p cookie
    writeCookie(name,"",-1);
}