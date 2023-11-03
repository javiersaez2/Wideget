<?php
//Manejo de cache

 flush();
require 'simple_html_dom.php';

$data = json_decode(file_get_contents("php://input"), true);




$html3 = file_get_html('https://onlineradiobox.com/es/genre/rap/');
$datocancion2 = $html3->find('li[radioid=103333]');
foreach ($datocancion2 as $datacancion2) {
    //Hacemos un find para busacar el nombre de la cancon y un segundo para reducir los datos y buscar luego el href
    $nombrecancion = $datacancion2->find('div[class=stations__station__track]', 0);
    $nombrecancion = $nombrecancion->find('a[class="ajax"]', 0);
}

//Hacemos un explode por guion para poder separar la cancion del artista
$arraycancion = explode("-", $nombrecancion);
$nombrecancionfinal = "";
$artistafinal ="";
//Si tiene guion significa que tenemos una cancion con su artista, si no tendremos un texto generico

    //Buscamos el href para luego usarlo para buscar la imagen
    preg_match_all('/<a[^>]+href=([\'"])(?<href>.+?)\1[^>]*>/i', $nombrecancion, $result);
    if (!empty($result["href"][0])){
    $nombrecancioninagen = $result["href"][0];
    }
    else{
        $nombrecancioninagen ="";
    }
    //For para separar la cancion  y el artista
    // var_dump($arraycancion);

    $artistafinal .= "$arraycancion[0]"; 
    // echo count($arraycancion);
        if (count($arraycancion)==2){
        $nombrecancionfinal = "$arraycancion[1]" ;
        }
    // echo"<br>".$nombrecancionfinal . "||||" . $arraycancion;

        $name = $nombrecancioninagen;
        $html2 = file_get_html('https://onlineradiobox.com' . $name);
        // $html2 = file_get_html('https://onlineradiobox.com/track/302248/');

        $dato2 = $html2->find('dl[class=subject]');
        foreach ($dato2 as $data2) {

            $cancion3 = $data2->find('dd[class=subject__cover--album]', 0);
            if (!empty($cancion3)){
            $cancion3 = $cancion3->find('img', 0);
            }
        }






$response['ncancion'] = $nombrecancionfinal;
$response['acancion'] = $artistafinal;     // not filled user or password
$cambiocancion = $data['cambiocancion'];

//Si la cacnion cambio enviamos la imagen
if ($cambiocancion == "no") {
$response['imagen'] = "$cancion3";     // not filled user or password
}// echo($nombrecancioninagen);
echo json_encode($response);
