/*
SQLyog Community Edition- MySQL GUI v8.12 
MySQL - 5.1.73-community : Database - angularJ
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`angularJ` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `angularJ`;

/*Table structure for table `jugadores` */

DROP TABLE IF EXISTS `jugadores`;

CREATE TABLE `jugadores` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `fechaNacimiento` varchar(100) DEFAULT NULL,
  `posicion` varchar(100) DEFAULT NULL,
  `biografia` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

/*Data for the table `jugadores` */

insert  into `jugadores`(`id`,`nombre`,`nacionalidad`,`fechaNacimiento`,`posicion`,`biografia`) values (1,'Zidane', 'Francia', '1972-06-23', 'Mediocampista', '(árabe: زين الدين زيدان, pronunciación en francés: /zinedin zidan/; Marsella, 23 de junio de 1972), también conocido como Zizou,1​ es un exfutbolista y entrenador francés de ascendencia argelina. Es el actual entrenador del Real Madrid de la Primera División de España.3​');
insert  into `jugadores`(`id`,`nombre`,`nacionalidad`,`fechaNacimiento`,`posicion`,`biografia`) values (2,'Ronaldinho', 'Brasil', '1980-03-21', 'Delantero', '(Porto Alegre, Brasil, 21 demarzo de 1980), conocido deportivamente como Ronaldinho, es un exjugador de fútbol brasileño nacionalizado español. Es mundialmente reconocido como uno de los talentos más grandes en la historia de dicho deporte.');
insert  into `jugadores`(`id`,`nombre`,`nacionalidad`,`fechaNacimiento`,`posicion`,`biografia`) values (3,'Pirlo', 'Italia', '1979-05-19', 'Mediocampista', 'Es un exfutbolista italiano. Se desempeñaba en la posición de mediocentro defensivo y su último equipo fue el New York City F. C. de la Major League Soccer de Estados Unidos. Destacó gracias a su buen pase, visión de juego, control de balón y lanzamiento de tiro libre.');
insert  into `jugadores`(`id`,`nombre`,`nacionalidad`,`fechaNacimiento`,`posicion`,`biografia`) values (4,'Cafu', 'Brasil', '1976-10-29', 'Defensor', 'Es un exfutbolista brasileño. Es el líder de todos los tiempos en apariciones con la selección brasileña, con 142 a partir del 30 de marzo de 2005. Jugó en dos equipos brasileños campeones del mundo y en 2002 se convirtió en el único jugador en jugar tres finales consecutivas de la Copa del Mundo.');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
