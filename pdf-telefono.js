$(document).ready(function(){
	$('#btnFacturaTelefono').click(function(){
		var datos=$('#frmajax').serialize();
		$.ajax({
			type:"POST",
			url:"facturas.php",
			data:datos,
			success:function(r) {
				const data = JSON.parse(r)[0];
				var doc = new jsPDF();

				// Header 1
				var nomCoop = "COOPERATIVA DE LUZ Y FUERZA DE CABILDO LTDA";
				var dirCoop = "San Martín 18 - 8118 CABILDO - Pcia de Buenos Aires";
				var contactCoop = "TEL: (0291)4918035 / FAX: (0291)4918174";
				var emailCoop = "e-mail: coopluzcabildo@infovia.com.ar";
				var ivaCoop = "IVA RESPONSABLE INSCRIPTO";
				var fechaCoop = "FECHA: " + data.fecha;
				
				// Header 2
				var cuitCoop = "CUIT: N° 30-54664001/5";
				var ingrBrutosCoop = "INGRESOS BRUTOS: 007-046756-8";
				var persJurCoop = "PERS. JURÍDICA: N° 11504";
				var regPubCoop = "REG. PUB. COM.: N° 426";
				var inacCoop = "I.N.A.C.: N° 3975";
				var cajaCoop = "CAJA NAC. PREV.: N° 8764/1956"
				var inicioCoop = "INICIO DE ACTIVIDADES: 28/07/1956";
				var nroFact = "FACTURA N°: " +  data.nro_factura;
				
				// Header 3
				var nroUsuario = "USUARIO N°: " + data.usuario;
				var asociado = "ASOCIADO: " + data.asociado;
				var domicilio = "DOMICILIO: " + data.domicilio;
				var localidad = "LOCALIDAD: " + data.localidad;
				var nroCuenta = "CUENTA N°: " + data.cuenta;
				var nroCuit = "CUIT: N°: " + data.cuit;
				var nroIva = "RESPONSABILIDAD I.V.A N°: " + data.iva;
				
				// Footer
				var reclamo = data.obs1;
				var factTotal = "TOTAL FACTURA";
				
				doc.setDrawColor(191, 2, 11);
				doc.setFillColor(204, 204,204,0);
				
				// Header 1
				doc.setFontSize(11);
				doc.setFillColor(254, 243, 244);
				doc.roundedRect(10, 20, 120, 40, 3, 3, 'FD');
				doc.setFont("helvetica");
				doc.setFontStyle("bold");
				doc.text(nomCoop, 12, 28);
				doc.setFontStyle("normal");
				doc.setTextColor(40);
				doc.text(dirCoop, 12, 34);
				doc.text(contactCoop, 12, 40);
				doc.text(emailCoop, 12, 46);
				doc.text(ivaCoop, 12, 52);
				doc.text(fechaCoop, 12, 58);
				
				// Header 2
				doc.setFontSize(9);
				doc.setFillColor(193, 254, 200);
				doc.setFillColor(254, 243, 244);
				doc.roundedRect(132, 20, 70, 40, 3, 3, 'FD');
				doc.setFont("helvetica");
				doc.setTextColor(100);
				doc.text(cuitCoop, 134, 26);
				doc.text(ingrBrutosCoop, 134, 30);
				doc.text(persJurCoop, 134, 34);
				doc.text(regPubCoop, 134, 38);
				doc.text(inacCoop, 134, 42);
				doc.text(cajaCoop, 134, 46);
				doc.text(inicioCoop, 134, 50);
				doc.setFontSize(12);
				doc.setTextColor('black');
				doc.setFontStyle("bold");
				doc.text(nroFact, 134, 56);
				
				// Header 3
				doc.setFontSize(10);
				doc.setFillColor(254, 243, 244);
				doc.roundedRect(10, 62, 192, 40, 3, 3, 'FD');
				doc.setFontStyle("normal");
				doc.text(nroUsuario, 12, 70);
				doc.text(asociado, 12, 78);
				doc.text(domicilio, 12, 86);
				doc.text(localidad, 12, 94);
				doc.text(nroCuenta, 95, 70);
				doc.text(nroCuit, 95, 78);
				doc.text(nroIva, 95, 86);
				
				doc.setFillColor(254, 243, 244);
				doc.roundedRect(10, 104, 192, 170, 3, 3, 'FD');

				_cargarCuerpo(data, doc);
				
				// Footer
				doc.line(10, 260, 202, 260);
				doc.rect(140, 260, 30, 14);
				doc.setFontSize(10);
				doc.setFont("courier");
				doc.setFontStyle("normal");
				doc.text(reclamo, 12, 267);
				doc.setFont("helvetica");
				doc.setFontStyle("bold");
				doc.text(factTotal, 140, 267);

				if (window.navigator && window.navigator.msSaveOrOpenBlob) {
					window.navigator.msSaveOrOpenBlob(doc.output("blob"));
				}
				else {
					var objectUrl = URL.createObjectURL(doc.output("blob"));
					window.open(objectUrl);
				}
				// window.open(URL.createObjectURL(doc.output("blob")))
			}
		});

		return false;
	});
});

function _cargarCuerpo(data, doc) {
	doc.setFont("courier");
	doc.setFontStyle("normal");
	doc.setFontSize(9);
	var linea = 110;
	doc.text(data.concepto_importe1, 12, linea);
	linea+=4;
	if (data.fila1) {
		doc.text(data.fila1, 12, linea);
		linea+=4
	}
	if (data.fila2) {
		doc.text(data.fila2, 12, linea);
		linea+=4
	}
	if (data.fila3) {
		doc.text(data.fila3, 12, linea);
		linea+=4
	}
	if (data.fila4) {
		doc.text(data.fila4, 12, linea);
		linea+=4
	}
	if (data.fila5) {
		doc.text(data.fila5, 12, linea);
		linea+=4
	}
	if (data.fila6) {
		doc.text(data.fila6, 12, linea);
		linea+=4
	}
	if (data.fila7) {
		doc.text(data.fila7, 12, linea);
		linea+=4
	}
	if (data.fila8) {
		doc.text(data.fila8, 12, linea);
		linea+=4
	}
	if (data.fila9) {
		doc.text(data.fila9, 12, linea);
		linea+=4
	}
	if (data.fila10) {
		doc.text(data.fila10, 12, linea);
		linea+=4
	}
	if (data.fila11) {
		doc.text(data.fila11, 12, linea);
	}
	// Chequea si hay algun concepto para poner el subtotal
	if (data.fila1) {
		doc.text(data.total1, 12, linea + 4);
		linea+=8;
	}
	if (data.fila12) {
		doc.text(data.concepto_importe2, 12, linea + 4);
		linea+=8;
		doc.text(data.fila12, 12, linea);
		linea+=4
	}
	if (data.fila13) {
		doc.text(data.fila13, 12, linea);
		linea+=4
	}
	if (data.fila14) {
		doc.text(data.fila14, 12, linea);
		linea+=4
	}
	if (data.fila15) {
		doc.text(data.fila15, 12, linea);
		linea+=4
	}
	if (data.fila16) {
		doc.text(data.fila16, 12, linea);
		linea+=4
	}
	if (data.fila17) {
		doc.text(data.fila17, 12, linea);
		linea+=4
	}
	if (data.fila18) {
		doc.text(data.fila18, 12, linea);
		linea+=4
	}
	if (data.fila19) {
		doc.text(data.fila19, 12, linea);
		linea+=4
	}
	if (data.fila20) {
		doc.text(data.fila20, 12, linea);
		linea+=4
	}
	if (data.fila21) {
		doc.text(data.fila21, 12, linea);
		linea+=4
	}
	if (data.fila22) {
		doc.text(data.fila22, 12, linea);
	}
	// Chequea si hay algun concepto para poner el subtotal
	if (data.fila12) {
		doc.text(data.total2, 12, linea + 4);
		linea+=8;
	}
	if (data.fila23) {
		doc.text(data.concepto_importe3, 12, linea + 4);
		linea+=8;
		doc.text(data.fila23, 12, linea);
		linea+=4
	}
	if (data.fila24) {
		doc.text(data.fila24, 12, linea);
		linea+=4
	}
	if (data.fila25) {
		doc.text(data.fila25, 12, linea);
		linea+=4
	}
	if (data.fila26) {
		doc.text(data.fila26, 12, linea);
		linea+=4
	}
	if (data.fila27) {
		doc.text(data.fila27, 12, linea);
		linea+=4
	}
	if (data.fila28) {
		doc.text(data.fila28, 12, linea);
		linea+=4
	}
	if (data.fila29) {
		doc.text(data.fila29, 12, linea);
		linea+=4
	}
	if (data.fila30) {
		doc.text(data.fila30, 12, linea);
		linea+=4
	}
	if (data.fila31) {
		doc.text(data.fila31, 12, linea);
		linea+=4
	}
	if (data.fila32) {
		doc.text(data.fila32, 12, linea);
		linea+=4
	}
	if (data.fila33) {
		doc.text(data.fila33, 12, linea);
		linea+=4
	}
	if (data.fila34) {
		doc.text(data.fila34, 12, linea);
		linea+=4
	}
	if (data.fila23) {
		doc.text(data.total2, 12, linea + 4);
	}
}
