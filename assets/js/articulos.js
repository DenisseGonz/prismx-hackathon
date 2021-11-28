let params = new URLSearchParams(location.search);
let id = params.get('id');

let titulo = document.getElementById("titulo"); 
let fecha = document.getElementById("fecha");
let autor = document.getElementById("autor");
let texto = document.getElementById("texto");
let link = document.getElementById("link");
let resumen = document.getElementById("resumen");



let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

fetch('https://gc751049a04829a-db202111272136.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/prismx/articulo/'+id, {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  titulo.innerHTML = data.items[0].titulo_art;
  fecha.innerHTML = obtenerFecha(data.items[0].fecha_art) + " por";
  autor.innerHTML = data.items[0].autor;
  texto.innerHTML = data.items[0].resumen;
  link.innerHTML = "<a href='"+data.items[0].url+"'>"+data.items[0].url+"</a>";
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