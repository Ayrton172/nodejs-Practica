let selecciones = ['Argentina', 'Brasil', 'Venezuela', 'Paraguay', 'Uruguay', 'Chile']

for (let i = 0; i < selecciones.length; i++) {
    console.log(selecciones[i]);
}

console.log('\n---------------------------------------------------\n')

for (let seleccion of selecciones) {
    console.log(seleccion);
}

const saludo = () => console.log('Hola gente como estan');

//Exportar mis modulos es una variable - ES5
module.exports = selecciones;

//Exportar todos los modulos
module.exports = {
    selecciones,
    saludo
}
