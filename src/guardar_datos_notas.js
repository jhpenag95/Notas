/***Guardar dato en tabla  ingresoNotas*/
function guardarNotas() {
    db.collection("ingresoNotas").add({
        nombreEstudiante: document.getElementById('estudiantesLits').value,
        conceptoSeleccionado: document.getElementById('temaList').value,
        porcentajeSeleccionado: document.getElementById('porcentajeLits').value,
        NotaConcepto: document.getElementById('nota').value,
        fechaNota: document.getElementById('date').value,
        totalNota: document.getElementById('resultado').value
    })
    .then((docRef) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo la Nota con Exito!',
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...No se guardo el dato',
            text: 'No se guadar con exito!',
            footer: '<a href="">El dato no se Guardo</a>'
          })
    });
    formulario.reset();
}





