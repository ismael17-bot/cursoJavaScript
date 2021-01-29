<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <pre>
        <table border="1"><tr>
    <?php
    $vetor= array(3,4,5,8);
    print_r($vetor);
    $vetor[]=200;
    print_r($vetor);
    $vetor2=range(1,20,1);
    foreach($vetor2 as $v){
        echo " <td>$v";
    }
    ?>
    <?php

    $vj=array("nome"=>"ismael","idade"=>23,"peso"=>70.50);
    foreach($vj as $a){
        echo " $a";
    }

    ?>
    
    </pre>
</body>
</html>