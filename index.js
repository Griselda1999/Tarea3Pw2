let playmovie = [] //Este es el arreglo vacio

class movie { // creamos la clase 

    // creamos el cosnstructor con los parametros

    constructor(id, nombre, idioma, fechaestreno, duracion, director, distribuidapor, cinematografia, editor,imagen) {
        this.id = id
        this.nombre = nombre
        this.idioma = idioma
        this.fechaestreno = fechaestreno
        this.duracion = duracion
        this.director = director
        this.distribuidapor = distribuidapor
        this.cinematografia = cinematografia
        this.editor = editor
        this.imagen = imagen
        

    }

   
};




// llenamos el arreglo
const movie1 = new movie(1, "Sin Novedad en el Frente", "Aleman", "Septiembre 28-2022", "120 Minutos",
    "Edward Barger", "Netflix", "James Friend", "Sven Budelman", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuJnlkLZV5_sT8TD1hrRpmkJCH_WPJ1xCFOLISc27Tcr7RhAix")

 const movie2 = new movie(2, "The Good Nurse", "Español", "Septiembre 11-2022", "90 Minutos",
    " Tobias Lindholm", "Netflix", " Jody Lee Lipes", " Jonathan Filley, Ari Handel","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCuATmvvOYTHIoj2cJ5sAiYjL2K-toKuaZXXhBcjWhLBrK5k3S")

    const movie3 = new movie(3, "Ultima Noche", "Ingles", "Diciembre 04-2022", "120 Minutos",
    " Camille Griffin", " AMC+, Altitude Film Distribution", "Sam Renton", " Stephanie Collie","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsxlTksFRpsEHREoPa-epglXlBMlnHEfWUKIJ2Bhr1xGN1XaQc")

    const movie4 = new movie(4, "La escuela del Bien y del Mal", "Español", "Octubre 18-2022", "87 Minutos",
    " Paul Feig", "Netflix", "John Schwartzman", " Brent White","https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg")

    const movie5 = new movie(5, "Pinocho", "Igles", "Septiembre 08-2022", "150 Minutos",
    "Robert Zemeckis", "Disney+", "Don Burgess", "Mick Audsley","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsifNBbCd9akddbx7-cIBMNVyZ2TXCR5ptbIx9M9_lt0KhRp6M")


playmovie.push(movie1)
playmovie.push(movie2)
playmovie.push(movie3)
playmovie.push(movie4)
playmovie.push(movie5)

//
const Busquedamovie = playmovie.filter(movie => movie.id === 4)
console.log(Busquedamovie)

   // Update

const Busquedamovie2 = playmovie.find(movie => movie.id === 4)
console.log("nombre", Busquedamovie2.nombre)
Busquedamovie2.nombre= "La escuela del Bien y del Mal";

  // Delete
let arregloMovie= playmovie.filter(movie => movie.id !== 4)
console.log(arregloMovie)


console.log(playmovie)