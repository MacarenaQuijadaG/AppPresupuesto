function enviarPresupuesto(){
    let valorCajaPresupuesto = document.getElementById('txtPresupuesto').value;
    let elParrafoPresupuesto = document.getElementById('parrafoPresupuesto');
    elParrafoPresupuesto.innerText = valorCajaPresupuesto;
}

var arregloNombresGastos =[];
var arregloNombresGastosEliminar =[];
var arregloCantidadGastos=[];
var arregloCantidadGastosEliminar=[];

function acumularGastos(){
    let acumuladoGastos=0;
   
    for(let i=0; i<arregloCantidadGastos.length;i++){
        acumuladoGastos = acumuladoGastos + arregloCantidadGastos[i];
    }
    return acumuladoGastos;
} 

function eliminarElemento(indice){
    arregloNombresGastosEliminar =[];
    arregloCantidadGastosEliminar=[];
    console.log(indice);
    arregloNombresGastos.splice(indice,1);
    arregloCantidadGastos.splice(indice,1);

    console.log(arregloNombresGastos);
    console.log(arregloCantidadGastos);

    eliminarContenido();

    for(let i=0; i<arregloNombresGastos.length;i++){
        arregloNombresGastosEliminar.push(arregloNombresGastos[i]);
        arregloCantidadGastosEliminar.push(arregloCantidadGastos[i]);
    }

    console.log('arrayNombreGastosEliminar: ',arregloNombresGastosEliminar);
    console.log('arrCantidadGastosEliminar:', arregloCantidadGastosEliminar);


    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');
    let elAcumuladoGastos = 0;

 
    for(let i=0 ; i<arregloCantidadGastos.length; i++){
        elAcumuladoGastos = elAcumuladoGastos + arregloCantidadGastos[i];
    }

    elParrafoGasto.innerText = elAcumuladoGastos;

        let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(elAcumuladoGastos);
        elParrafoSaldo.innerText = elSaldo;
    pintarGastosEliminar();

}

function eliminarContenido(){
    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');

    elParrafoNombreGasto.innerText = '';
    elParrafoValor.innerText = '';
    elParrafoAccion.innerText = '';
}

function pintarGastosEliminar(){

    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');



    let limiteEliminar =arregloNombresGastosEliminar.length;
    console.log('limiteEliminar:',limiteEliminar);


    for(let j=0; j<limiteEliminar; j++){

        let unParrafoTextoNuevo = document.createElement('p');
        let unParrafoValorNuevo = document.createElement('p');
        let unParrafoAccionNuevo = document.createElement('p');
        let unBotonNuevo = document.createElement('button');

        console.log('j:',j);
       
        unParrafoTextoNuevo.innerText = arregloNombresGastosEliminar[j];
        console.log('arrNombresGastosEliminar[j]:', arregloNombresGastosEliminar[j]);
       
        unParrafoValorNuevo.innerText = arrCantidadGastosEliminar[j];
        console.log('arrCantidadGastosEliminar[j];',arregloCantidadGastosEliminar[j]);

        unBotonNuevo.innerText = 'Eliminar';
        unBotonNuevo.setAttribute('onclick', `eliminarElemento(${j})`);

       
        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValor.appendChild(unParrafoValorNuevo);
        unParrafoAccionNuevo.appendChild(unBotonNuevo);
        elParrafoAccion.appendChild(unParrafoAccionNuevo);
    }
}

function pintarGastos(){

    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');

    let unParrafoTextoNuevo = document.createElement('p');
    let unParrafoValorNuevo = document.createElement('p');
    let unParrafoAccionNuevo = document.createElement('p');
    let unBotonNuevo = document.createElement('button');

    for(let i=0; i<arregloNombresGastos.length; i++){

        unParrafoTextoNuevo.innerText = arregloNombresGastos[i];
        unParrafoValorNuevo.innerText = arregloCantidadGastos[i];
        unBotonNuevo.innerText = 'Eliminar';
        unBotonNuevo.setAttribute('onclick', `eliminarElemento(${i})`);

        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValor.appendChild(unParrafoValorNuevo);
        unParrafoAccionNuevo.appendChild(unBotonNuevo);
        elParrafoAccion.appendChild(unParrafoAccionNuevo);
    }

}

function enviarGasto(){
   
    let valorCajaGasto = document.getElementById('txtNombreGasto').value;
    let valorCantidadGasto = document.getElementById('txtCantidadGasto').value;
    arregloNombresGastos.push(valorCajaGasto);
    arregloCantidadGastos.push(parseFloat(valorCantidadGasto));

    console.log('arreglo gastos:');
    console.log(arregloNombresGastos);
    console.log('cantidad gastos:');
    console.log(arregloCantidadGastos);
 

    let elAcumuladoGastos =  acumularGastos(); 
    console.log(elAcumuladoGastos);
    
    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');
    elParrafoGasto.innerText = elAcumuladoGastos;
    let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(elAcumuladoGastos);
    elParrafoSaldo.innerText = elSaldo;
    pintarGastos();

}

function asignarEventos(){
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', enviarPresupuesto);
    let elBotonAnadir = document.getElementById('btnAnadirGasto');
    elBotonAnadir.addEventListener('click', enviarGasto);
}