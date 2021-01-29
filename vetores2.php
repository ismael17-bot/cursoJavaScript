<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <pre>
    <?php    
    $vj=array("nome"=>"ismael","idade"=>23,"peso"=>70.50);
    foreach($vj as $k =>$a){
        echo("o campo $k possui o conteudo $a<br>");
    }
    $matriz= array( array(13,43),
                    array(1273,432),
                    array(22,432)

    );
    print_r($matriz);
    ?>
    </pre>
</body>
</html>