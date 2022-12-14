
class Libro{
    constructor(nombre, editorial){
        this.nombre = nombre;
        this.editorial = editorial;
    }
}

let libro = '';
let array = [];

function buscarLibro(nombre){
    let flag = false;
    let flag2 = false;
    while(flag == false){
        for(const elemento of array){
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
        alert('CUIDADO!!! Ingresaste una opción incorrecta.');
    }
}

alert(`Cantidad de libros guardados: ${array.length}`);
for (elemento of array){
    alert(elemento.nombre);
}





