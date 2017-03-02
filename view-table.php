<?php session_start(); ?>

<?php
if(!isset($_SESSION['valid'])) {
	header('Location: index.php');
}
?>

<?php
//including the database connection file
include_once("../egresados/connection.php");

//fetching data in descending order (lastest entry first)
$result = mysqli_query($mysqli, "SELECT * FROM fegresados");
?>

<html>
<head>
	<title>Ver egresados</title>
	<?php
	include ("../egresados/header.php");
	?>
</head>

<body>
	<a href="../egresados/index.php">Inicio</a> | <a href="../egresados/logout.php">Cerrar sesion</a>
	<br/><br/>
<div class="container">
	
	<table class="table table-hover">
		<thead>
		<tr>
			<td>Nombre</td>
			<td>Apellido Paterno</td>
			<td>Apellido Materno</td>
			<td>Nacimiento</td>
			<td>Email</td>
			<td>Telefono</td>
			<td>Celular</td>
			<td>Sede</td>
			<td>Grado</td>
			<td>Programa</td>
			<td>Generacion</td>
			<td>Trabaja</td>
			<td>Empresa</td>
			<td>Cargo</td>
			<td>Sueldo</td>
			<td></td>
		</tr>
	    </thead>
	    <tbody>
		<?php
		while($res = mysqli_fetch_array($result)) {		
			echo "<tr>";
			echo "<td>".$res['nombre']."</td>";
			echo "<td>".$res['apellidop']."</td>";
			echo "<td>".$res['apellidom']."</td>";	
			echo "<td>".$res['nacimiento']."</td>";
			echo "<td>".$res['email']."</td>";
			echo "<td>".$res['telefono']."</td>";
			echo "<td>".$res['celular']."</td>";
			echo "<td>".$res['sede']."</td>";
			echo "<td>".$res['grado']."</td>";
			echo "<td>".$res['programa']."</td>";
			echo "<td>".$res['generacion']."</td>";
			echo "<td>".$res['trabaja']."</td>";
			echo "<td>".$res['empresa']."</td>";
			echo "<td>".$res['cargo']."</td>";
			echo "<td>".$res['salario']."</td>";
			echo "<td><a href=\"delete.php?id=$res[id]\" onClick=\"return confirm('Seguro que desea eliminarlo?')\">Eliminar</a></td>";		
		}
		?>
	</tbody>
	</table>	
</div>
	<?php
	include("../egresados/footer.php");
	?>
</body>
</html>
