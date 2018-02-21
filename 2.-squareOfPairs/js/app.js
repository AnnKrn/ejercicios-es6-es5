// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

// var array = [2, 4, 6];
// var array = [1, 2, 3, 4, -5];
var array = [-3, 2, -8, 12, 5];


// declaración de la funcion 

// function square (array) {
//   // escribe tu código aqui...
//   // itera por el array
//   array.forEach(function(element) {
//     // console.log(element)    
//     // verifica que el núemro sea positivo
//     if (element % 2 == 0){      
//       // eleva al cuadrado si se cumple la función
//       element = Math.pow(element, 2)
//       // console.log(element)
//     };
//     console.log(element);
//     return element
//   })
// };

// square(array);

                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6
// declara variables (let-const)
// primera versión
// const square = array => {console.log(array.map(Math.pow))}

// sugunda versión
const square = array => {
  array.forEach(element => {
    if (element % 2 == 0){      
      element = Math.pow(element, 2)
      // console.log(element)
    };
    console.log(element)  
    return element
  })
}

square(array);
// declara la funcion y ejecuta el código









// ejecuta la funcion 

