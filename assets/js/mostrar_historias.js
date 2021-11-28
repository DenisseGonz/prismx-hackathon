let espacio ='<div class="col-md-2"></div>';

for(let i=1; i<=6;i++){
    let container = document.getElementById(`contenedor__historia-${i}`);
    let tarjeta=`<div class="col-md-10"><div id="historia_${i}" class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative blurreado"><div class="col p-4 d-flex flex-column position-static"><strong class="d-inline-block mb-2 etiquetaTrabajo">Trabajo</strong><h3 class="titulo__card mb-0"><a href="#" class="text-white">Empresa fantasma</a></h3><div class="mb-1">Nov, 2016</div><p class="card-text mb-auto"> Encontre un anuncio saliendo de la prepa para un trabajo, a lo cual decidi llamar y agende cita para una entrevista. Al llegar me di cuenta de que no tenian una oficina... </p></div><div class="col-auto d-none mt-3 mr-2 d-lg-block"><div class="ih-item circle colored effect13 bottom_to_top"><a href="#"><div class="img"><img class="img" src="assets/svg/job-people.svg" width="180" height="230" /></div><div class="info"><div class="info-back"><h3>Selecciona la imagen</h3><p class="text-black">Para saber el chisme completo</p></div></div></a></div></div></div></div>`;
    if(i%2==0){
        container.innerHTML=espacio;
        container.innerHTML+=tarjeta;
    }else{
        container.innerHTML=tarjeta;
        container.innerHTML+=espacio;
    }
    let div = document.getElementById(`historia_${i}`);
    let color;
    switch(i){
        case 1: color='#e5332a80'; break;
        case 2: color='#f6a51a8f'; break;
        case 3: color='#f3e51c8a'; break;
        case 4: color='#7cb72e81'; break;
        case 5: color='#009f9788'; break;
        case 6: color='#8e43908a'; break;
    }
    div.setAttribute("style", `background-color:${color};`);
}