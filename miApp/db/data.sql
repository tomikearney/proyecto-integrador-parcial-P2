CREATE DATABASE IF NOT EXISTS data_bases;
USE data_bases;

CREATE TABLE usuarios (
	id 			INT 				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre		VARCHAR(200)		UNIQUE NOT NULL,
    email 		VARCHAR (60)		UNIQUE NOT NULL,
    clave 		VARCHAR (200)		NOT NULL,
    fotoPerfil  VARCHAR (1000)		NULL, 
	fecha  		DATE 				NULL,
    dni 		INT					UNIQUE NOT NULL,
    createdAt 	TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP,
	updatedAt 	TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 	TIMESTAMP 			NULL 
);

CREATE TABLE posteos (
	id 					INT 				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	idUsuario			INT					UNSIGNED,
    nombreImg 			VARCHAR (1000)		NOT NULL, 
    descripcionImg 		TEXT				NOT NULL,
    createdAt 			TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP,
	updatedAt 			TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 			TIMESTAMP 			NULL,
    
	FOREIGN KEY (idUsuario) REFERENCES usuarios (id)

);

CREATE TABLE comentarios (
	id 					INT 				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	idPosteo			INT					UNSIGNED,
    idUsuario			INT					UNSIGNED,
	comentario 			TEXT				NOT NULL,
    createdAt 			TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP,
	updatedAt 			TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 			TIMESTAMP 			NULL, 
	FOREIGN KEY (idPosteo) REFERENCES posteos (id),	
	FOREIGN KEY (idUsuario) REFERENCES usuarios (id)	

);	

INSERT INTO usuarios VALUES(DEFAULT, "Fran Withel", "fran@yahoo.com", "holaMundo123", "/img/fran.png", "1987-05-15", 41234567, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Maria Kolek", "maria.kolek@example.com", "Secure2223", "/img/maria.png", "1997-05-20", 41000067, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Oriana Benasconi", "oriana@example.com", "PassWork2029", "/img/oriana.png", "2000-11-29", 39083649, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Tomas Michel", "tomas@example.com", "sTudyPass22", "/img/tomas.png", "2000-09-19", 47087649, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES(DEFAULT, "Jorge Perez", "jorge@example.com", "postPass22", "/img/jorge.png", "2000-09-09", 66798539, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO posteos VALUES(DEFAULT, 1, "https://i.pinimg.com/750x/e4/2f/aa/e42faae39332f20bdd18f065a90c174f.jpg", "Si estas comenzando a leer en inglés, a continuación te dejamos algunas opciones entretenidas", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 1, "https://i.pinimg.com/750x/40/5a/1d/405a1d6ac6d8d0dce042be0f88a00265.jpg", "¡Los mejores libros ingresarón este mes! ¿Ya tenes el tuyo?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 2, "https://i.pinimg.com/564x/4d/7c/53/4d7c53bb0b569f560b3c6aa3fee6ac95.jpg", "En este mes se incorporarón NUEVOS libros para los pequeños gigantesss", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 2, "https://i.pinimg.com/750x/ae/66/07/ae660750f84988775f9e48cc8c788490.jpg", "En este espacio se podra seleccionar un libro que nos guste a todos y poder hacer una lectura compartida.¿Les gusta la idea? Proximamente subimos las fechas", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 3, "https://i.pinimg.com/750x/f3/9d/a3/f39da3a14d043bb9ce4bc9709f421e19.jpg", "En el día de hoy les venimos a recomendar 2 libros de Ficción. Por un lado De Ira y Amor de Sabaa Tahir y por el otro Valientemente de Maggie Stiefvater", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 3, "https://i.pinimg.com/750x/35/11/b5/3511b52654a9c1d9e4daf446e47a97e3.jpg", "En el día de hoy les venimos a recomendar 2 libros de Fantasía. Por un lado El Asesinato del Señor Wickham de Claudia Gray y por el otro Una Magia Impregnada de Veneno de Judy l. Lin", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 4, "https://i.pinimg.com/564x/83/6a/e8/836ae80fe604bf83c277856c48d9678e.jpg", "Ayudanos a armar una playlist conjunta. Pero antes queremos saber si ustedes leer con música. Dejanos tu respuesta en los comentarios!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 4, "https://i.pinimg.com/750x/1f/d8/4a/1fd84a5f1c6c96e0bf2d0df1ea04f660.jpg", "¡Septiembre es el mes perfecto para sumergirse en un buen libro en Winter Libros! Disfruta de un 10% de descuento en todos nuestros libros, además de envío GRATIS a tu sucursal más cercana en pedidos superiores a 14500.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 5, "https://i.pinimg.com/564x/86/8e/d8/868ed850df1681329d3ad563f91c6276.jpg", "5 Libros que no podés dejar pasar ¿Cuál agregarias?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 5, "https://i.pinimg.com/564x/61/81/c7/6181c7481ac0145aee34c15568c885b8.jpg", "Descuentos Especiales en todos los libros de la saga de Harry Potter ¿Leístes toda la saga? ¿Qué te parecio?", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 1, 1, "¡Me encantan los 5!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 1, 2, "Leí todos!! Son increibles", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 1, 3, "Definitivamente, los tienen que leer", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 1, 4, "Justo estaba buscando opciones de libros para leer", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 2, 5, "Cuál recomiendan?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 2, 1, "Menos mal que dije que iba ahorra ¡Imposible con las novedades!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 2, 2, "Estoy enamorado/a de las novedades del mes", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 2, 3, "¡Novedades infaltables!", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 3, 4, "Justo buscaba uno para mi hijo ¡gracias!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 3, 5, "Para que edades son recomendables?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 3, 1, "Los libros alimentan la saviduria y ayudan a ver el mundo de otra forma.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 3, 2, "Gracias por la referenciaa", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 4, 3, "¡Amo", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 4, 4, "Ya quiero las fechasss!!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 4, 5, "¿Cómo me inscribo?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 4, 1, "Me apuntooo", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 5, 2, "Súper recomendable el libro de Maggie", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 5, 3, "Son unos libros muy entretenidos", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 5, 4, "Recomiendan libros de Fantasía ¡Pliss!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 5, 5, "Son increibless", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 6, 1, "Graicass por la recomendacion muchos lo esperabamos", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 6, 2, "Los quierooo!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 6, 3, "Son todo lo que esta bien!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 6, 4, "Lo mejor de las tardes es poder darse un tiempo para leer y beber algo", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 7, 5, "Obviooo que siii", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 7, 1, "¡Que idea tan genial! Solo escucho música cuando leo algo simple, porque si es algo de la facultad requiero de concentración jajaj", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 7, 2, "¡Buena ideaaa!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 7, 3, "Muy pocas veces escucho música", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 8, 4, "¡Gracias por los descuentos!!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 8, 5, "Es durante todo el mes?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 8, 1, "Son genialess!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 8, 2, "Justo cuando lo necesitaba!!", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 9, 3, "El 5to libro es súper entretenido. Lo recomiendo!!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 9, 4, "Increíble los imperdibles!!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 9, 5, "¿Cuál me recomiendan para empezar a leer?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 9, 1, "No me decido ¡Ayuda!", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, 10, 2, "¡Son súper entretenidos!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 10, 3, "Los recomiendoo!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 10, 4, "Aún no los leí, pero es uno de mis pendientes!!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, 10, 5, "¡Qué maravillosa saga!", DEFAULT, DEFAULT, DEFAULT);
