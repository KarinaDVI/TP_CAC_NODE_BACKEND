-- Creacion de BBDD --

create database if not exists TicketFriends;
use TicketFriends;

-- Creacio de objeto usuario --

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
	"usuario" varchar(40) NOT NULL
	"contraseña" varchar(15) NOT NULL
	"mail" text(100) NOT NULL
	"nombre" varchar(35) NOT NULL
	"apellido" varchar(30) NOT NULL
	"fecha_nac" date NOT NULL
	"telefono" int (20) NOT NULL
	"provincia" varchar(30) NOT NULL
	"localidad" varchar(70) NOT NULL
	"domicilio" text(50) NOT NULL
	);

-- restablecer contraseña --

ALTER TABLE usuario
CHANGE COLUMN contraseña nueva_contraseña VARCHAR(40) NOT NULL;
