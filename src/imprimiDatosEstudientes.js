db.collection("estudiantes").get().then((querySnapshot) => {
    student.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        student.innerHTML += `
                <tr>
                    <td>${doc.data().CodStudent}</td>
                    <td>${doc.data().apellidosEs}</td>
                    <td>${doc.data().nombreEs}</td>
                    <td>${doc.data().materiaEs}</td>
                    <td>${doc.data().semestreEs}</td>
                    <td>${doc.data().correoEs}</td>
                     
                    <td class="drop-icon">
                    <button  onclick="modificar('${doc.id}','${doc.data().CodStudent}','${doc.data().apellidosEs}','${doc.data().nombreEs}','${doc.data().materiaEs}','${doc.data().semestreEs}','${doc.data().correoEs}')"><i><img src="../Assets/icons/escritura.png" alt="modificar dato"></i></button>
                    </td>
                    <td class="drop-icon">
                        <button onclick="eliminar('${doc.id}')" id="elimina"><i><img src="../Assets/icons/contenedor-de-basura.png" alt="eliminar"></i></button>
                    </td>
                </tr>`;
    });
});



// Actualizar datos

function modificar(id, codigoEstudiante, apellidosEstudiante, nombresEstudiante, materiaEstudiante, semestreEstudiante, emailEstudiante) {

    /**habilitamos el formualio al agcer click */
    document.getElementById('containerupdate').style.display = 'block';
    

    console.log(id);
    
    /**Traemos los datos al mosmulario */
    document.getElementById('CodStudent').value = codigoEstudiante;
    document.getElementById('apellidosEs').value = apellidosEstudiante;
    document.getElementById('nombreEs').value = nombresEstudiante;
    document.getElementById('materiaEs').value = materiaEstudiante;
    document.getElementById('semestreEs').value = semestreEstudiante;
    document.getElementById('correoEs').value = emailEstudiante;

    var btnupEs = document.getElementById('enviarDatosEstudent');
    btnupEs.innerHTML = 'Actulizar';



    /**btn date.html */
    
    btnupEs.addEventListener('click', (e)=>{
        e.preventDefault();

        var washingtonRef = db.collection("estudiantes").doc(id);
    
        
        /**guardar dato actualizado el dato */
        var codigoEstudiante = document.getElementById('CodStudent').value;
        var apellidosEstudiante = document.getElementById('apellidosEs').value;
        var nombreEstudiante = document.getElementById('nombreEs').value;
        var materiaEstudiante = document.getElementById('materiaEs').value;
        var semestreEstudiante = document.getElementById('semestreEs').value;
        var emailEstudiante = document.getElementById('correoEs').value;

        return washingtonRef.update({
            CodStudent: codigoEstudiante,
            apellidosEs: apellidosEstudiante,
            nombreEs: nombreEstudiante,
            materiaEs: materiaEstudiante,
            semestreEs: semestreEstudiante,
            correoEs: emailEstudiante
        })
            .then(() => {
               var elementoTabla = document.getElementById(id);
                /**Ocultar formulario al hacer click */
               document.getElementById('containerupdate').style.display = 'none';
               
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
    db.collection("estudiantes").doc(id).delete().then(() => {
        location.reload();//actualiza la pagina
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Elimino Registro!',
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




