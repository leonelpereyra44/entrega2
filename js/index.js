
class Libro{
    constructor(nombre, editorial){
        this.nombre = nombre;
        this.editorial = editorial;
    }
}

let libro = '';
let array = [];

//Funcion para verificar que existe libro almacenado en el arreglo
function buscarLibro(nombre){
    let flag = false;
    let flag2 = false;
    while(flag == false){
        for(const elemento of array){
            //***Verifico que exista el libro ingresado por el usuario en el arreglo
            //***si no existe libro guardado el flag lo colocare en TRUE para luego poder mandar un error
            //si no verificara el flag en otro if fuera del FOR donde veo cada elemento del arreglo
            //estaria alertando que no existe el libro para cada elemento distinto al que ingreso el usuario
            //por eso lo hice de esta manera
            if(elemento.nombre === nombre){
                flag2 = false;
                flag = true;
                return (elemento);
            } else if(elemento.nombre != nombre){
                flag2 = true;
            }
        }
        if (flag2 == true){
            alert('No existe ese libro!!!');
            break;
        }
    }
}

while (true){
    let libronombre = '';
    let opcion = '';
    let opcion2 = '';
    opcion = prompt('¿Desea ingresar nuevo libro?(SI/NO)');
    opcion = opcion.toLowerCase();
    if (opcion == 'no'){
        opcion2 = prompt('¿Desea buscar información sobre un libro?(SI/NO)');
        opcion2 = opcion2.toLowerCase();
        //Verifico ademas de la opcion elegida por el usuario que haya libros guardados para poder buscar
        //Si no hay libros guardados mando un error
        if ((opcion2 == 'si') && (array.length > 0)){
            libronombre = prompt('Ingrese nombre del libro');
            alert(`
            Libro: ${buscarLibro(libronombre).nombre}
            Editorial: ${buscarLibro(libronombre).editorial}`);

        } else if((opcion2 == 'si') && (array.length == 0)){
            alert('No hay libros ingresados!!!');
        } else{break;}
        
    } else if (opcion == 'si'){
        libronombre = prompt('Ingrese nombre del libro a guardar');
        libroeditorial = prompt('Ingrese editorial del libro');
        array.push(new Libro(libronombre, libroeditorial));
    } else{
        //Si el usuario no ingresa (si ó no) mandará error y a volver a intentarlo
        alert('CUIDADO!!! Ingresaste una opción incorrecta.');
    }
}

alert(`Cantidad de libros guardados: ${array.length}`);
for (const elemento of array){
    alert(`Se ha ingresado: ${elemento.nombre}`);
}