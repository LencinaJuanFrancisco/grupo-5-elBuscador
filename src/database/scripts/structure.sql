CREATE DATABASE  IF NOT EXISTS `elbuscador1` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `elbuscador1`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: elbuscador1
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.19-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,NULL,NULL,'red',NULL),(2,NULL,NULL,'blue',NULL),(3,NULL,NULL,'pink',NULL),(4,NULL,NULL,'orange',NULL),(5,NULL,NULL,'green',NULL),(6,NULL,NULL,'yellow',NULL),(7,NULL,NULL,'black',NULL);
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colores_productos`
--

LOCK TABLES `colores_productos` WRITE;
/*!40000 ALTER TABLE `colores_productos` DISABLE KEYS */;
INSERT INTO `colores_productos` VALUES (14,'2021-07-24 17:53:58.339000','2021-07-24 17:53:58.339000',53,1,NULL),(15,'2021-07-24 17:53:58.341000','2021-07-24 17:53:58.341000',53,7,NULL),(16,'2021-07-24 17:53:58.343000','2021-07-24 17:53:58.343000',53,2,NULL),(17,'2021-07-24 17:53:58.340000','2021-07-24 17:53:58.340000',53,4,NULL),(18,'2021-07-24 17:53:58.342000','2021-07-24 17:53:58.342000',53,3,NULL),(19,'2021-07-24 19:13:09.412000','2021-07-24 19:13:09.412000',55,1,NULL),(20,'2021-07-24 19:13:09.413000','2021-07-24 19:13:09.413000',55,2,NULL),(21,'2021-07-24 19:13:09.414000','2021-07-24 19:13:09.414000',55,3,NULL),(22,'2021-07-24 19:14:31.092000','2021-07-24 19:14:31.092000',56,1,NULL),(23,'2021-07-24 19:14:31.096000','2021-07-24 19:14:31.096000',56,2,NULL),(24,'2021-07-24 19:14:31.105000','2021-07-24 19:14:31.105000',56,3,NULL),(25,'2021-07-24 19:14:31.105000','2021-07-24 19:14:31.105000',56,5,NULL),(26,'2021-07-24 19:14:31.106000','2021-07-24 19:14:31.106000',56,5,NULL);
/*!40000 ALTER TABLE `colores_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,NULL,NULL,'mujer',NULL),(2,NULL,NULL,'niña',NULL),(3,NULL,NULL,'niño',NULL);
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (39,'2021-07-24 17:53:58.287000','2021-07-24 17:53:58.287000','1627149238267_img.jpg',53,NULL),(40,'2021-07-24 19:13:09.390000','2021-07-24 19:13:09.390000','1627153989337_img.jpg',55,NULL),(41,'2021-07-24 19:14:31.074000','2021-07-24 19:14:31.074000','1627154071027_img.jpg',56,NULL);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (53,'2021-07-24 17:53:58.274000','2021-07-24 23:27:45',' aqaqaq',121212,'aqaqaqaaqa\r\n      ',121212,1,1,NULL),(54,NULL,NULL,'aa',2,'2',2,1,1,NULL),(55,'2021-07-24 19:13:09.364000','2021-07-24 19:13:09','Conjunto mujer',1500,'cualwuira',10,1,1,NULL),(56,'2021-07-24 19:14:31.061000','2021-07-24 19:14:31','Conjunto mujer',1500,'cualwuira',10,1,1,NULL),(57,NULL,NULL,'SACO EWE',12390,'Saco corto confeccionado en velvet azul. Tiene cuello Mao y apliques brillosos de guardas y charreteras en el frente y los hombros. Animate a combinarlo con el Pantalón Ashan Frederique para un total look nocturno e invernal a puro glamour.',200,2,1,NULL),(58,NULL,NULL,'KIMONO ORIENTAL MIKA',14950,'Kimono confeccionado en tejido vaporoso con estampa en blanco y negro. Es largo y liviano, con mangas holgadas. Ideal para combinar con prendas básicas y darle un toque sofisticado a tu look de día.',200,2,1,NULL),(59,NULL,NULL,'SACO JEANNE GINA',14950,'Trench confeccionado en tela texturada de algodón con elastano y estampa con efecto batik a dos colores. Tiene cuello con solapas y pespuntes a contratono, lazo de ajuste en la cintura, bolsillos delanteros y botones de carey en el frente. Junto con el Pantalón Gina Mix, forman un total look espectacular.',250,2,1,NULL),(60,NULL,NULL,'SACO BLOCK GEO',7740,'Saco corto y liviano con manga larga. Es abierto adelante y tiene moldería recta. Está confeccionado en tejido de algodón con estampa geométrica en verde y tiene bordado de canutillos en el frente.',150,2,1,NULL),(61,NULL,NULL,'SWEATER SAI',5950,'Sweater confeccionado en tejido liviano. Tiene escote redondo, calce holgado y mangas ¾ con volados a la altura de los hombros. Ideal para un look fresco y colorido.',150,2,1,NULL),(62,NULL,NULL,'BABUCHA VALE MEL',9900,'Babucha con elástico en la cintura y ruedo con puño. Es negra y en los laterales tiene galones bordados con hilos metalizados dorados. La podés combinar con una remera lisa para un look cómodo y casual o con la Remera Vale Mel para un total look más llamativo y elegante.',100,1,1,NULL),(63,NULL,NULL,'PANTALON LANIER',14999,'Patalón confeccionado en tejido de lana marrón. Tiene tiro medio con cordón de ajuste en la cintura y calce recto con costuras en el centro de las piernas. Un ítem calentito y confortable, ideal para combinar con el Sweater Lanier en un total look invernal con mucha onda.',80,1,1,NULL),(64,NULL,NULL,'REMERA VALE LUXE',5900,'Remera con escote redondo, manga corta y calce recto. Es negra y en los hombros tiene galones bordados con hilos metalizados multicolor.',90,1,1,NULL),(65,NULL,NULL,'PANTALON SPORTY',7500,'Pantalón tipo jogging confeccionado en tejido de algodón. Tiene calce súper holgado, bolsillos laterales y cintura ancha con elástico y cordón de ajuste. Ideal para estar cómoda en casa o combinar con el Buzo Sporty para un total look deportivo.',52,1,1,NULL),(66,NULL,NULL,'JEAN TANDORI NAITEE',15,'Jean de tiro medio con calce Oxford y línea A, ajustado en la cintura y suelto desde la cadera hacia el tobillo. Está confeccionado en tejido 100% algodón, azul con lavado stone localizado y detalles gastados en el frente. No llega al piso, así que es ideal para usar con zapatillas en un look bien informal.',72,1,1,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos_ordenes`
--

LOCK TABLES `productos_ordenes` WRITE;
/*!40000 ALTER TABLE `productos_ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin',NULL,NULL,NULL),(2,'buyer',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,NULL,NULL,'s',NULL),(2,NULL,NULL,'m',NULL),(3,NULL,NULL,'l',NULL),(4,NULL,NULL,'x',NULL),(5,NULL,NULL,'xl',NULL),(6,NULL,NULL,'xx1',NULL),(7,NULL,NULL,'25',NULL),(8,NULL,NULL,'26',NULL),(9,NULL,NULL,'27',NULL),(10,NULL,NULL,'28',NULL),(11,NULL,NULL,'29',NULL),(12,NULL,NULL,'30',NULL),(13,NULL,NULL,'31',NULL),(14,NULL,NULL,'32',NULL),(15,NULL,NULL,'33',NULL),(16,NULL,NULL,'34',NULL),(17,NULL,NULL,'35',NULL),(18,NULL,NULL,'36',NULL),(19,NULL,NULL,'37',NULL),(20,NULL,NULL,'38',NULL),(21,NULL,NULL,'39',NULL),(22,NULL,NULL,'40',NULL),(23,NULL,NULL,'41',NULL),(24,NULL,NULL,'42',NULL),(25,NULL,NULL,'43',NULL),(26,NULL,NULL,'44',NULL),(27,NULL,NULL,'45',NULL),(28,NULL,NULL,'46',NULL),(29,NULL,NULL,'1',NULL),(30,NULL,NULL,'2',NULL),(31,NULL,NULL,'3',NULL),(32,NULL,NULL,'4',NULL),(33,NULL,NULL,'5',NULL),(34,NULL,NULL,'6',NULL),(35,NULL,NULL,'7',NULL),(36,NULL,NULL,'8',NULL);
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `talles_productos`
--

LOCK TABLES `talles_productos` WRITE;
/*!40000 ALTER TABLE `talles_productos` DISABLE KEYS */;
INSERT INTO `talles_productos` VALUES (37,'2021-07-24 17:53:58','2021-07-24 17:53:58',7,53,NULL),(38,'2021-07-24 17:53:58','2021-07-24 17:53:58',10,53,NULL),(39,'2021-07-24 17:53:58','2021-07-24 17:53:58',8,53,NULL),(40,'2021-07-24 17:53:58','2021-07-24 17:53:58',9,53,NULL),(41,'2021-07-24 17:53:58','2021-07-24 17:53:58',12,53,NULL),(42,'2021-07-24 19:13:09','2021-07-24 19:13:09',1,55,NULL),(43,'2021-07-24 19:13:09','2021-07-24 19:13:09',2,55,NULL),(44,'2021-07-24 19:13:09','2021-07-24 19:13:09',3,55,NULL),(45,'2021-07-24 19:13:09','2021-07-24 19:13:09',5,55,NULL),(46,'2021-07-24 19:13:09','2021-07-24 19:13:09',4,55,NULL),(47,'2021-07-24 19:14:31','2021-07-24 19:14:31',1,56,NULL),(48,'2021-07-24 19:14:31','2021-07-24 19:14:31',2,56,NULL),(49,'2021-07-24 19:14:31','2021-07-24 19:14:31',3,56,NULL),(50,'2021-07-24 19:14:31','2021-07-24 19:14:31',4,56,NULL),(51,'2021-07-24 19:14:31','2021-07-24 19:14:31',5,56,NULL);
/*!40000 ALTER TABLE `talles_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `temporadas`
--

LOCK TABLES `temporadas` WRITE;
/*!40000 ALTER TABLE `temporadas` DISABLE KEYS */;
INSERT INTO `temporadas` VALUES (1,NULL,NULL,'verano',NULL),(2,NULL,NULL,'invierno',NULL);
/*!40000 ALTER TABLE `temporadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'pepe','pepe@gmail.com','123',NULL,1,NULL,NULL,NULL),(2,'pancho','pancho@gmail.com','123',NULL,2,NULL,NULL,NULL),(3,'luis','luis@dh.com','$2a$10$sutt.GD56RGt3Vh9Q80bJ.RP.wn9vOQewkhuckkTb6s2bowLHviQ2','1627167765599_img.jpg',2,NULL,'2021-07-24 23:02:45.809000','2021-07-24 23:02:45.809000');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-24 20:35:25
