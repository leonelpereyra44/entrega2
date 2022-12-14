
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
                alert(`
                Nombre: ${elemento.nombre} 
                Editorial: ${elemento.editorial}
                `);
                break;
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
    let flag = '';
    let flag2 = '';
    flag = prompt('¿Desea ingresar nuevo libro?(SI/NO)');
    flag = flag.toLowerCase();
    if (flag == 'no'){
        flag2 = prompt('¿Desea buscar información sobre un libro?(SI/NO)');
        flag2 = flag2.toLowerCase();
        if (flag2 == 'si'){
            libronombre = prompt('Ingrese nombre del libro');
            buscarLibro(libronombre);
        } else{break;}
        
    } else if (flag == 'si'){
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





