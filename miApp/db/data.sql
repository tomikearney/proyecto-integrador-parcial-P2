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

INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "5 libros de ficción en inglés", "Si estas comenzando a leer en inglés, a continuación te dejamos algunas opciones entretenidas", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "Novedad Septiembre", "¡Los mejores libros ingresarón este mes! ¿Ya tenes el tuyo?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "Infantiles", "En este mes se incorporarón NUEVOS libros para los pequeños gigantesss", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "LecturaCooperativa", "En este espacio se podra seleccionar un libro que nos guste a todos y poder hacer una lectura compartida.¿Les gusta la idea? Proximamente subimos las fechas", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "Recomendacion", "En el día de hoy les venimos a recomendar 2 libros de Ficción. Por un lado De Ira y Amor de Sabaa Tahir y por el otro Valientemente de Maggie Stiefvater", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "Recomendacion Fantasia", "En el día de hoy les venimos a recomendar 2 libros de Fantasía. Por un lado El Asesinato del Señor Wickham de Claudia Gray y por el otro Una Magia Impregnada de Veneno de Judy l. Lin", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "Cuestionamiento1", "Ayudanos a armar una playlist conjunta. Pero antes queremos saber si ustedes leer con música. Dejanos tu respuesta en los comentarios!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "OffBooks", "¡Septiembre es el mes perfecto para sumergirse en un buen libro en Winter Libros! Disfruta de un 10% de descuento en todos nuestros libros, además de envío GRATIS a tu sucursal más cercana en pedidos superiores a 14500.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "Imperdibles", "5 Libros que no podés dejar pasar ¿Cuál agregarias?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos VALUES(DEFAULT, DEFAULT, "HarryPotter", "Descuentos Especiales en todos los libros de la saga de Harry Potter ¿Leístes toda la saga? ¿Qué te parecio?", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES(DEFAULT, DEFAULT, DEFAULT, "", DEFAULT, DEFAULT, DEFAULT);

/*INSERTAR DATOS*/
