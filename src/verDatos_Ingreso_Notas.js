
/***Imprimir datos en la pagina de Calcular Notas ()*/

db.collection("estudiantes").get().then((querySnapshot) => {
    estudiantesLits.innerHTML = '';
    querySnapshot.forEach((doc) => {
        estudiantesLits.innerHTML += `
            <option value="${doc.data().nombreEs} ${doc.data().apellidosEs}"> ${doc.data().nombreEs} ${doc.data().apellidosEs}</option>
        `;
    });
});

/***Imprimir datos en la pagina de Calcular Notas (selecicon de temas)*/

db.collection("procesos").get().then((querySnapshot) => {
    temaList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        temaList.innerHTML += `
        <option value="${doc.data().temaP}">${doc.data().temaP}</option>
        `;
    });
});


/***Imprimir datos en la pagina de Calcular Notas (selecicon de porcentajes)*/

db.collection("procesos").get().then((querySnapshot) => {
    porcentajeLits.innerHTML = '';
    querySnapshot.forEach((doc) => {
        porcentajeLits.innerHTML += `
        <option value="${doc.data().porcentajeP}">${doc.data().porcentajeP}</option>
        `;
    });
});




