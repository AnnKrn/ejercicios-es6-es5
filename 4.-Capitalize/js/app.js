// En este ejercicio te daremos el código en ES6 ya solucionado, tu tendrás que transformarlo en ES5


const word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

// const capitalize = str => {
//   let newStr = str.split(" ");
//   let result = [];
//     newStr.forEach(palabra=> {
//       let primerLetra = palabra.charAt(0).toUpperCase();
//       // console.log(primerLetra)
//       let mediaPalabra = palabra.slice(1, palabra.length);
//       // console.log(mediaPalabra)
//       result.push(primerLetra + mediaPalabra);
//       console.log(result)
      
//     });
//     console.log(result.join(" "));
//    };	

capitalize(word);


// Comenta el código anterior y ahora traducelo a ES5

function capitalize(str) {
  var newStr = str.split(" ");
  var result = [];
}