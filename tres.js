function mostrar()
{


	var precio; 
	var porcentajeDeDescuento; 
	var precioFinal; 


	precio=prompt("Ingrese el precio"); 
	porcentajeDeDescuento=prompt(" Ingrese el descuento ");


	precio=parseInt(precio);
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

    preciofinal=precio-precio*porcentajeDeDescuento/100;

    document.getElementById('elPrecioFinal').value=preciofinal;

	 }