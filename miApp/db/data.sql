CREATE DATABASE IF NOT EXISTS data_bases;
USE data_bases;

CREATE TABLE usuarios (
	id 			INT 				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre		VARCHAR(200)		UNIQUE NOT NULL,
    email 		VARCHAR (60)		UNIQUE NOT NULL,
    clave 		VARCHAR (200)		NOT NULL,
    fotoPerfil  VARCHAR (200)		NULL, 
	fecha  		DATE 				NULL,
    dni 		INT					UNIQUE NOT NULL,
    createdAt 	TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP,
	updatedAt 	TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 	TIMESTAMP 			NULL 
);

CREATE TABLE posteos (
	id 					INT 				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	idUsuario			INT					UNSIGNED,
    nombreImg 			VARCHAR (100)		NOT NULL, 
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

INSERT INTO posteos VALUES(DEFAULT, 1, "5 libros de ficción en inglés", "Si estas comenzando a leer en inglés, a continuación te dejamos algunas opciones entretenidas", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 1, "Novedad Septiembre", "¡Los mejores libros ingresarón este mes! ¿Ya tenes el tuyo?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 2, "Infantiles", "En este mes se incorporarón NUEVOS libros para los pequeños gigantesss", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 2, "LecturaCooperativa", "En este espacio se podra seleccionar un libro que nos guste a todos y poder hacer una lectura compartida.¿Les gusta la idea? Proximamente subimos las fechas", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 3, "Recomendacion", "En el día de hoy les venimos a recomendar 2 libros de Ficción. Por un lado De Ira y Amor de Sabaa Tahir y por el otro Valientemente de Maggie Stiefvater", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 3, "Recomendacion Fantasia", "En el día de hoy les venimos a recomendar 2 libros de Fantasía. Por un lado El Asesinato del Señor Wickham de Claudia Gray y por el otro Una Magia Impregnada de Veneno de Judy l. Lin", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 4, "Cuestionamiento1", "Ayudanos a armar una playlist conjunta. Pero antes queremos saber si ustedes leer con música. Dejanos tu respuesta en los comentarios!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 4, "OffBooks", "¡Septiembre es el mes perfecto para sumergirse en un buen libro en Winter Libros! Disfruta de un 10% de descuento en todos nuestros libros, además de envío GRATIS a tu sucursal más cercana en pedidos superiores a 14500.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 5, "Imperdibles", "5 Libros que no podés dejar pasar ¿Cuál agregarias?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, 5, "HarryPotter", "Descuentos Especiales en todos los libros de la saga de Harry Potter ¿Leístes toda la saga? ¿Qué te parecio?", DEFAULT, DEFAULT, DEFAULT);

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
