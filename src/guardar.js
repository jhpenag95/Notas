
function guardarEstudiante() {
    db.collection("estudiantes").add({
        CodStudent: document.getElementById('CodStudiante').value,
        nombreEs: document.getElementById('nombres').value,
        apellidosEs: document.getElementById('apellidos').value,
        semestreEs: document.getElementById('semestre').value,
        materiaEs: document.getElementById('materia').value,
        correoEs: document.getElementById('email').value,
        fechaEs: document.getElementById('date').value
    })
        .then((docRef) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se guardo estudiante con Exito!',
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...No se guardo el dato',
                text: 'No se guardo el dato!'
            })
        });

    registroEstudiante.reset();
}


// function guardarEstudiante() {
//     var cod = document.getElementById('CodStudiante').value;
//     var nom = document.getElementById('nombres').value;
//     var ap = document.getElementById('apellidos').value;
//     var seme = document.getElementById('semestre').value;
//     var ametria = document.getElementById('materia').value;
//     var email = document.getElementById('email').value;
//     var dato = document.getElementById('date').value;

//     console.log(cod, nom, ap, seme, ametria, email, dato);
// };