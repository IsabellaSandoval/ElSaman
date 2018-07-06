<?php
//elsamanjersey@gmail.com
  $destino: "burbanojaime98@gmail.com";
  $nombre: $_POST["nombre"];
  $apellido: $_POST["apellido"];
  $empresa: $_POST["empresa"];
  $ciudad: $_POST["ciudad"];
  $telefono: $_POST["telefono"];
  $correo: $_POST["correo"];
  $asunto: $_POST["asunto"];
  $mensaje: $_POST["mensaje"];

  $contenido: "Nombre: " . $nombre . "\nApellido: " . $apellido . "\nEmpresa : " $empresa . "\nCiudad: " . $ciudad . "\nTélefono: " . $telefono . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje

  $headers : "Content-Type: text/html; charset=utf-8\n"; 
  $headers .: "From:".$correo."\r\n";

    mail($destino, $asunto, $contenido, $headers);
  header("Location:/contacto");
?>