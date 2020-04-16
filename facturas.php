<?php 
	$conexion=mysqli_connect('localhost','root','','coope');

	$nro_usuario=$_POST['nroUsuario'];
	$sql="SELECT * from luz WHERE usuario = '{$nro_usuario}' order by fecha limit 1";
	$result =  mysqli_query($conexion,$sql);
	$myArray = array();
	if (mysqli_num_rows($result) > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			$myArray[] = $row;
		}
		echo json_encode($myArray);
	} else {
		echo json_encode($myArray);
	}
 ?>