//Tematica: pagina de comercio de libros
const data = {
    usuario: [
        {
            id: 1,
            nombre: "Fran Withel",
            email: "fran@yahoo.com",
            clave: "holaMundo123",
            fotoPerfil: "/img/fran.png",
            fecha: '15/05/1987',
            dni: "41234567"
        },
        {
            id: 2,
            nombre: "Maria Kolek",
            email: 'maria.kolek@example.com',
            clave: 'Secure2223',
            fotoPerfil: "/img/maria.png",
            fecha: '20/05/1997',
            dni: "41000067"
        },
        {
            id: 3,
            nombre: "Oriana Benasconi",
            email: 'oriana@example.com',
            clave: 'PassWork2029',
            fotoPerfil: "/img/oriana.png",
            fecha: '29/11/2000',
            dni: "39083649"
        },
        {
            id: 4,
            nombre: "Tomas Michell",
            email: 'tomas@example.com',
            clave: 'sTudyPass22',
            fotoPerfil: "/img/tomas.png",
            fecha: '19/09/2000',
            dni: "47087649"
        },
        {
            id: 5,
            nombre: "Jorge Perez",
            email: 'jorge@example.com',
            clave: 'postPass22',
            fotoPerfil: "/img/jorge.png",
            fecha: '09/09/2000',
            dni: "40798539"
        },

    ],

    posteos: [
        {
            id: 1,
            idUsuario: 1,
            nombreUsuarioPost: "Fran Withel",
            nombreImg:"https://i.pinimg.com/750x/e4/2f/aa/e42faae39332f20bdd18f065a90c174f.jpg",
            descripcionImg:"Si estas comenzando a leer en inglés, a continuación te dejamos algunas opciones entretenidas",
            email: "fran@yahoo.com",
            fotoPerfil: "/img/fran.png",
            comentarios: [{
                id: 1,
                idPosteo: 1,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "¡Me encantan los 5!"
            },
            {
                id: 2,
                idPosteo: 1,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "Leí todos!! Son increibles"
            },
            {
                id: 3,
                idPosteo: 1,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "Definitivamente, los tienen que leer"
            },
            {
                id: 4,
                idPosteo: 1,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Justo estaba buscando opciones de libros para leer"
            }]
        },
        {
            id: 2,
            idUsuario: 1,
            nombreUsuarioPost: "Fran Withel",
            nombreImg: "https://i.pinimg.com/750x/40/5a/1d/405a1d6ac6d8d0dce042be0f88a00265.jpg",
            descripcionImg: "¡Los mejores libros ingresarón este mes! ¿Ya tenes el tuyo?",
            email: "fran@yahoo.com",
            fotoPerfil: "/img/fran.png",
            comentarios: [{
                id: 5,
                idPosteo: 2,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "Cuál recomiendan?"
            },
            {
                id: 6,
                idPosteo: 2,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "Menos mal que dije que iba ahorra ¡Imposible con las novedades!"
            },
            {
                id: 7,
                idPosteo: 2,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "Estoy enamorado/a de las novedades del mes"
            },
            {
                id: 8,
                idPosteo: 2,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "¡Novedades infaltables!"

            },
        ]
        },
        {
            id: 3,
            idUsuario: 2,
            nombreUsuarioPost: "Maria Kolek",
            nombreImg: "https://i.pinimg.com/564x/4d/7c/53/4d7c53bb0b569f560b3c6aa3fee6ac95.jpg",
            email: 'maria.kolek@example.com',
            fotoPerfil: "/img/maria.png",
            descripcionImg: " En este mes se incorporarón NUEVOS libros para los pequeños gigantesss",
            comentarios: [{
                id: 9,
                idPosteo: 3,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Justo buscaba uno para mi hijo ¡gracias!"
            },
            {
                id: 10,
                idPosteo: 3,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "Para que edades son recomendables?"
            },
            {
                id: 11,
                idPosteo: 3,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "Los libros alimentan la saviduria y ayudan a ver el mundo de otra forma."
            },
            {
                id: 12,
                idPosteo: 3,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "Gracias por la referenciaa"
            }]
        },
        {
            id: 4,
            idUsuario: 2,
            nombreUsuarioPost: "Maria Kolek",
            nombreImg: "https://i.pinimg.com/750x/ae/66/07/ae660750f84988775f9e48cc8c788490.jpg",
            email: 'maria.kolek@example.com',
            fotoPerfil: "/img/maria.png",
            descripcionImg: "En este espacio se podra seleccionar un libro que nos guste a todos y poder hacer una lectura compartida.¿Les gusta la idea? Proximamente subimos las fechas. ",
            comentarios: [{
                id: 13,
                idPosteo: 4,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "¡Amo!"
            },
            {
                id: 14,
                idPosteo: 4,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Ya quiero las fechasss!!"
            },
            {
                id: 15,
                idPosteo: 4,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "¿Cómo me inscribo?"
            },
            {
                id: 16,
                idPosteo: 4,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "Me apuntooo"
            }]
        },
        {
            id: 5,
            idUsuario: 3,
            nombreUsuarioPost: "Oriana Benasconi",
            nombreImg: "https://i.pinimg.com/750x/f3/9d/a3/f39da3a14d043bb9ce4bc9709f421e19.jpg",
            descripcionImg: "En el día de hoy les venimos a recomendar 2 libros de Ficción. Por un lado De Ira y Amor de Sabaa Tahir y por el otro Valientemente de Maggie Stiefvater",
            email: 'oriana.cacs@example.com',
            fotoPerfil: "/img/oriana.png",
            comentarios: [{
                id: 17,
                idPosteo: 5,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "Súper recomendable el libro de Maggie"
            },
            {
                id: 18,
                idPosteo: 5,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "Son unos libros muy entretenidos"
            },
            {
                id: 19,
                idPosteo: 5,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Recomiendan libros de Fantasía ¡Pliss!"
            },
            {
                id: 20,
                idPosteo: 5,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "Son increibless"
            }]
        },
        {
            id: 6,
            idUsuario: 3,
            nombreUsuarioPost: "Oriana Benasconi",
            nombreImg: "https://i.pinimg.com/750x/35/11/b5/3511b52654a9c1d9e4daf446e47a97e3.jpg",
            descripcionImg: "En el día de hoy les venimos a recomendar 2 libros de Fantasía. Por un lado El Asesinato del Señor Wickham de Claudia Gray y por el otro Una Magia Impregnada de Veneno de Judy l. Lin",
            email: 'oriana.cacs@example.com',
            fotoPerfil: "/img/oriana.png",
            comentarios: [{
                id: 21,
                idPosteo: 6,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "Graciass por la recomendacion muchos lo esperabamos"
            },
            {
                id: 22,
                idPosteo: 6,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "Los quierooo!"
            },
            {
                id: 23,
                idPosteo: 6,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "Son todo lo que esta bien!"
            },
            {
                id: 24,
                idPosteo: 6,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Lo mejor de las tardes es poder darse un tiempo para leer y beber algo"
            }]
        },
        {
            id: 7,
            idUsuario: 4,
            nombreUsuarioPost: "Tomas Michell",
            nombreImg: "https://i.pinimg.com/564x/83/6a/e8/836ae80fe604bf83c277856c48d9678e.jpg",
            descripcionImg: "Ayudanos a armar una playlist conjunta. Pero antes queremos saber si ustedes leer con música. Dejanos tu respuesta en los comentarios!",
            email: 'tomas@example.com',
            fotoPerfil: "/img/tomas.png",
            comentarios: [{
                id: 25,
                idPosteo: 7,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "Obviooo que siii"
            },
            {
                id: 26,
                idPosteo: 7,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "¡Que idea tan genial! Solo escucho música cuando leo algo simple, porque si es algo de la facultad requiero de concentración jajaj"
            },
            {
                id: 27,
                idPosteo: 7,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "¡Buena ideaaa!"
            },
            {
                id: 28,
                idPosteo: 7,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "Muy pocas veces escucho música"
            }]
        },
        {
            id: 8,
            idUsuario: 4,
            nombreUsuarioPost: "Tomas Michell",
            nombreImg: "https://i.pinimg.com/750x/1f/d8/4a/1fd84a5f1c6c96e0bf2d0df1ea04f660.jpg",
            descripcionImg: "¡Septiembre es el mes perfecto para sumergirse en un buen libro en Winter Libros! Disfruta de un 10% de descuento en todos nuestros libros, además de envío GRATIS a tu sucursal más cercana en pedidos superiores a 14500.",
            email: 'tomas@example.com',
            fotoPerfil: "/img/tomas.png",
            comentarios: [{
                id: 29,
                idPosteo: 8,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "¡Gracias por los descuentos!!"
            },
            {
                id: 30,
                idPosteo: 8,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "Es durante todo el mes?"
            },
            {
                id: 31,
                idPosteo: 8,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "Son genialess!"
            },
            {
                id: 32,
                idPosteo: 8,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "Justo cuando lo necesitaba!!"
            }]
        },
        {
            id: 9,
            idUsuario: 5,
            nombreUsuarioPost: "Jorge Perez",
            nombreImg: "https://i.pinimg.com/564x/86/8e/d8/868ed850df1681329d3ad563f91c6276.jpg",
            descripcionImg: "5 Libros que no podés dejar pasar ¿Cuál agregarias?",
            email: 'jorge@example.com',
            fotoPerfil: "/img/jorge.png",
            comentarios: [{
                id: 33,
                idPosteo: 9,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "El 5to libro es súper entretenido. Lo recomiendo!!"
            },
            {
                id: 34,
                idPosteo: 9,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Increíble los imperdibles!!"
            },
            {
                id: 35,
                idPosteo: 9,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "¿Cuál me recomiendan para empezar a leer?"
            },
            {
                id: 36,
                idPosteo: 9,
                idUsuario: 1,
                nombre: "Fran Withel",
                fotoPerfil: "/img/fran.png",
                comentario: "No me decido ¡Ayuda!"
            }]
        },
        {
            id: 10,
            idUsuario: 5,
            nombreUsuarioPost: "Jorge Perez",
            nombreImg: "https://i.pinimg.com/564x/61/81/c7/6181c7481ac0145aee34c15568c885b8.jpg",
            descripcionImg: "Descuentos Especiales en todos los libros de la saga de Harry Potter ¿Leístes toda la saga? ¿Qué te parecio?",
            email: 'jorge@example.com',
            fotoPerfil: "/img/jorge.png",
            comentarios: [{
                id: 37,
                idPosteo: 10,
                idUsuario: 2,
                nombre: "Maria Kolek",
                fotoPerfil: "/img/maria.png",
                comentario: "¡Son súper entretenidos!"
            },
            {
                id: 38,
                idPosteo: 10,
                idUsuario: 3,
                nombre: "Oriana Benasconi",
                fotoPerfil: "/img/oriana.png",
                comentario: "Los recomiendoo! "
            },
            {
                id: 39,
                idPosteo: 10,
                idUsuario: 4,
                nombre: "Tomas Michell",
                fotoPerfil: "/img/tomas.png",
                comentario: "Aún no los leí, pero es uno de mis pendientes!!"
            },
            {
                id: 40,
                idPosteo: 10,
                idUsuario: 5,
                nombre: "Jorge Perez",
                fotoPerfil: "/img/jorge.png",
                comentario: "¡Qué maravillosa saga!"
            }]
        },

    ]

}

module.exports = data;
