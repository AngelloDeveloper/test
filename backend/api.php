<?php 
    //api
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    $_post = json_decode(file_get_contents('php://input'),true);
    switch ($method) {
        case 'POST':
            $sql = "INSERT INTO plato VALUES('')";
        break;

        case 'GET':
            $sql = "SELECT * FROM plato ";
        break;

        case 'PUT':
            $sql = "UPDATE plato SET nombre='', color='', fecha='', precio='' WHERE id = ''";
        break;

        case 'DELETE':
            $sql = "DELETE FROM plato WHERE id = ''";
        break;
    }
?>