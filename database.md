-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema elbuscador1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema elbuscador1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `elbuscador1` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `elbuscador1` ;

-- -----------------------------------------------------
-- Table `elbuscador1`.`colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`colores` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_id` TIMESTAMP NULL DEFAULT NULL,
  `update_id` TIMESTAMP NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`generos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_id` TIMESTAMP NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `deleted_id` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`temporadas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`temporadas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` INT(11) NOT NULL,
  `descripcion` TEXT NULL DEFAULT NULL,
  `cantidad` INT(11) NULL DEFAULT NULL,
  `temporada_id` INT(11) NULL DEFAULT NULL,
  `genero_id` INT(11) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `temporada_id_idx` (`temporada_id` ASC),
  INDEX `genero_id_idx` (`genero_id` ASC),
  CONSTRAINT `genero_producto`
    FOREIGN KEY (`genero_id`)
    REFERENCES `elbuscador1`.`generos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `temporada_producto`
    FOREIGN KEY (`temporada_id`)
    REFERENCES `elbuscador1`.`temporadas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`colores_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`colores_productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update` TIMESTAMP NULL DEFAULT NULL,
  `producto_id` INT(11) NULL DEFAULT NULL,
  `colores_id` INT(11) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `producto__id_idx` (`producto_id` ASC),
  INDEX `color_id_idx` (`colores_id` ASC),
  CONSTRAINT `color_producto`
    FOREIGN KEY (`colores_id`)
    REFERENCES `elbuscador1`.`colores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `producto_color`
    FOREIGN KEY (`producto_id`)
    REFERENCES `elbuscador1`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`imagenes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `producto_id` INT(11) NULL DEFAULT NULL,
  `deleted_id` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `producto_id_idx` (`producto_id` ASC),
  CONSTRAINT `producto_imagenes`
    FOREIGN KEY (`producto_id`)
    REFERENCES `elbuscador1`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`usuarios` (
  `id` INT(11) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL DEFAULT 'null',
  `email` VARCHAR(100) NULL DEFAULT 'null',
  `pass` VARCHAR(255) NULL DEFAULT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `rol_id` INT(11) NULL DEFAULT NULL,
  `delete_ad` TIMESTAMP NULL DEFAULT NULL,
  `created_id` TIMESTAMP NULL DEFAULT NULL,
  `update_up` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `rol_id_idx` (`rol_id` ASC),
  CONSTRAINT `rol_usuario`
    FOREIGN KEY (`rol_id`)
    REFERENCES `elbuscador1`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`ordenes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  `usuario_id` INT(11) NULL DEFAULT NULL,
  `total_de_compra` DECIMAL(8,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `usuario_id_idx` (`usuario_id` ASC),
  CONSTRAINT `usuario_ordenes`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `elbuscador1`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`productos_ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`productos_ordenes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `orden_id` INT(11) NULL DEFAULT NULL,
  `producto_id` INT(11) NULL DEFAULT NULL,
  `catidad` INT(11) NOT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `orden_id_idx` (`orden_id` ASC),
  INDEX `producto_id_idx` (`producto_id` ASC),
  CONSTRAINT `orden_producto`
    FOREIGN KEY (`orden_id`)
    REFERENCES `elbuscador1`.`ordenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `producto_orden`
    FOREIGN KEY (`producto_id`)
    REFERENCES `elbuscador1`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`talles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`talles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `elbuscador1`.`talles_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuscador1`.`talles_productos` (
  `id` INT(11) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `update_at` TIMESTAMP NULL DEFAULT NULL,
  `talle_id` INT(11) NULL DEFAULT NULL,
  `producto_id` INT(11) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `talle_id_idx` (`talle_id` ASC),
  INDEX `producto_id_idx` (`producto_id` ASC),
  CONSTRAINT `producto_talle`
    FOREIGN KEY (`producto_id`)
    REFERENCES `elbuscador1`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `talle_producto`
    FOREIGN KEY (`talle_id`)
    REFERENCES `elbuscador1`.`talles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
