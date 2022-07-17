
//**Imprmir datos en tabla datos */
db.collection("ingresoNotas").get().then((querySnapshot) => {
    listaEstudiantes.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        listaEstudiantes.innerHTML += `
                <tr id="${doc.id}">
                    <td>${doc.id}</td>
                    <td>${doc.data().nombreEstudiante}</td>
                    <td>${doc.data().conceptoSeleccionado}</td>
                    <td>${doc.data().NotaConcepto}</td>
                    <td>${doc.data().porcentajeSeleccionado}%</td>
                    <td>${doc.data().totalNota}</td>
                    <td>${doc.data().fechaNota}</td>
                    
                    <td class="drop-icon">
                    <button  onclick="modificar('${doc.id}','${doc.data().nombreEstudiante}','${doc.data().conceptoSeleccionado}','${doc.data().NotaConcepto}','${doc.data().porcentajeSeleccionado}%')"><i><img src="../Assets/icons/escritura.png" alt="modificar dato"></i></button>
                    </td>
                    <td class="drop-icon">
                        <button onclick="eliminar('${doc.id}')" id="elimina"><i><img src="../Assets/icons/contenedor-de-basura.png" alt="eliminar"></i></button>
                    </td>
                </tr>`;
    });
});


// Actualizar datos

function modificar(id, nombre, concepto, nota, porcentaje) {

    /**habilitamos el formualio al agcer click */
    document.getElementById('containerupdate').style.display = 'block';

    console.log(id);
    
    /**Traemos los datos al mosmulario */
    document.getElementById('estudiantesLitsUpdate').value = nombre;
    document.getElementById('temaListUpdate').value = concepto;
    document.getElementById('notaUpdate').value = nota;
    document.getElementById('porcentajeLitsPrueba').value = porcentaje;

    var btnup = document.getElementById('enviarDatos');
    btnup.innerHTML = 'Actulizar';



    /**btn date.html */
    
    btnup.addEventListener('click', (e)=>{
        e.preventDefault();
        var washingtonRef = db.collection("ingresoNotas").doc(id);

        console.log(id);
        console.log(nombre);
        /**guardar dato actualizado el dato */
        var nombre = document.getElementById('estudiantesLitsUpdate').value;
        var concepto = document.getElementById('temaListUpdate').value;
        var nota = document.getElementById('notaUpdate').value;
        var porcen = document.getElementById('porcentajeLitsPrueba').value;

        var total =  nota * porcen / 100;
        console.log(total);
        
        return washingtonRef.update({
            nombreEstudiante: nombre,
            conceptoSeleccionado: concepto,
            NotaConcepto: nota,
            porcentajeSeleccionado: porcen,
            totalNota:total
        })
            .then(() => {
               var elementoTabla = document.getElementById(id);
               elementoTabla.children[1].innerHTML=nombre;
               elementoTabla.children[2].innerHTML=concepto;
               elementoTabla.children[3].innerHTML=porcen;
               elementoTabla.children[4].innerHTML=nota;
               elementoTabla.children[5].innerHTML=total;

               /**Ocultar formulario al hacer click */
               document.getElementById('containerupdate').style.display = 'none';
               location.reload();//actualiza la pagina
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Dato Actualizado!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...No se guardo el dato',
                    text: 'Something went wrong!',
                    footer: '<a href="">No se actualizo dato !!</a>'
                })
            });
            
    } );
}



//Borrar Datos
function eliminar(id) {
    db.collection("ingresoNotas").doc(id).delete().then(() => {
        location.reload();//actualiza la pagina
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Elmino el Dato!',
            showConfirmButton: false,
            timer: 1500
          });
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...No se guardo el dato',
            text: 'No se elimina Dato!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    });


}


