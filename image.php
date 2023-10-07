<?php
//Manejo de cache
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Content-Type: application/xml; charset=utf-8");
 flush();
require 'simple_html_dom.php';

$data = json_decode(file_get_contents("php://input"), true);




$html3 = file_get_html('https://onlineradiobox.com/es/?cs=es.los401023');
$datocancion2 = $html3->find('li[radioid=36569]');
foreach ($datocancion2 as $datacancion2) {
    //Hacemos un find para busacar el nombre de la cancon y un segundo para reducir los datos y buscar luego el href
    $nombrecancion = $datacancion2->find('div[class=stations__station__track]', 0);
    $nombrecancion = $nombrecancion->find('a[class="ajax"]', 0);
}

//Hacemos un explode por guion para poder separar la cancion del artista
$arraycancion = explode("-", $nombrecancion);
$nombrecancionfinal = "";

//Si tiene guion significa que tenemos una cancion con su artista, si no tendremos un texto generico
if (str_contains($nombrecancion, '-')) {
    //Buscamos el href para luego usarlo para buscar la imagen
    preg_match_all('/<a[^>]+href=([\'"])(?<href>.+?)\1[^>]*>/i', $nombrecancion, $result);
    $nombrecancioninagen = $result["href"][0];

    //For para separar la cancion  y el artista
    foreach ($arraycancion as $arraycancion) {
        $nombrecancionfinal .= strip_tags($arraycancion) . "<br>";
    }




        $name = $nombrecancioninagen;
        $html2 = file_get_html('https://onlineradiobox.com' . $name);
        // $html2 = file_get_html('https://onlineradiobox.com/track/432528191046634672/');

        $dato2 = $html2->find('dl[class=subject]');
        foreach ($dato2 as $data2) {

            $cancion3 = $data2->find('dd[class=subject__cover--album]', 0);
            $cancion3 = $cancion3->find('img', 0);
        }

} else {
    $nombrecancionfinal = 'No hay cancion';
    $cancion3 = "Imagen";
};





$response['cancion'] = $nombrecancionfinal;     // not filled user or password
$cambiocancion = $data['cambiocancion'];

//Si la cacnion cambio enviamos la imagen
if ($cambiocancion == "no") {
$response['imagen'] = "$cancion3";     // not filled user or password
}// echo($nombrecancioninagen);
echo json_encode($response);
