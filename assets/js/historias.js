let params = new URLSearchParams(location.search);
let id = params.get('id')

let titulo = document.getElementById("titulo");
let fecha = document.getElementById("fecha");
let texto = document.getElementById("texto");
let resumen = document.getElementById("resumen");
let tiktok = document.getElementById("tiktok");

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

fetch('https://gc751049a04829a-db202111272136.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/prismx/historia/'+id, {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  titulo.innerHTML = data.items[0].titulo;
  fecha.innerHTML = obtenerFecha(data.items[0].fecha);
  texto.innerHTML = data.items[0].texto;
  resumen.innerHTML = data.items[0].resumen + "<br><a href='articulo.html?id=5'>Leer más</a>";
  tiktok.innerHTML = data.items[0].tiktok;
})
.catch((error) => {
  console.error('Error:', error);
});

function obtenerFecha(fecha){

    fecha = fecha.slice(0,10);
    let valores = fecha.split("-");
    let respuesta = meses[valores[1]-1]+" "+valores[2]+", "+valores[0];
    return respuesta;

}