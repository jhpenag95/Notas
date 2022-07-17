function guardartemas() {
    db.collection("procesos").add({
        temaP: document.getElementById('tema').value,
        porcentajeP: document.getElementById('procentaje').value,
        dateTema: document.getElementById('date').value,
    })
    .then((docRef) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo Proceso',
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch((error) => {
        alert("No se registro el dato, revise");
    });

    ingresartema.reset();
}