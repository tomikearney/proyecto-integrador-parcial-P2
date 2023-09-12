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



/*INSERTAR DATOS*/
