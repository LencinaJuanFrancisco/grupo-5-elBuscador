-- ----------------------------------------- 
-- tabla color ---
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('1', 'red');
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('2', 'blue');
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('3', 'pink');
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('4', 'orange');
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('5', 'green');
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('6', 'yellow');
INSERT INTO `elbuscador1`.`colores` (`id`, `nombre`) VALUES ('7', 'black');


-- tabla talles ---

INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('1', 's');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('2', 'm');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('3', 'l');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('4', 'x');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('5', 'xl');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('6', 'xx1');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('7', '25');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('8', '26');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('9', '27');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('10', '28');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('11', '29');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('12', '30');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('13', '31');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('14', '32');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('15', '33');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('16', '34');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('17', '35');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('18', '36');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('19', '37');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('20', '38');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('21', '39');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('22', '40');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('23', '41');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('24', '42');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('25', '43');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('26', '44');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('27', '45');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('28', '46');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('29', '1');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('30', '2');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('31', '3');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('32', '4');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('33', '5');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('34', '6');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('35', '7');
INSERT INTO `elbuscador1`.`talles` (`id`, `nombre`) VALUES ('36', '8');


-- tabla Temporada------------------------------------------------------
INSERT INTO `elbuscador1`.`temporadas` (`id`, `nombre`) VALUES ('1', 'verano');
INSERT INTO `elbuscador1`.`temporadas` (`id`, `nombre`) VALUES ('2', 'invierno');


-- tabla Genero ---------------------------------------------------------
INSERT INTO `elbuscador1`.`generos` (`id`, `nombre`) VALUES ('1', 'mujer');
INSERT INTO `elbuscador1`.`generos` (`id`, `nombre`) VALUES ('2', 'niña');
INSERT INTO `elbuscador1`.`generos` (`id`, `nombre`) VALUES ('3', 'niño');

-- tabla Producto

-- mujer --
INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('SACO EWE','12390', 'Saco corto confeccionado en velvet azul. Tiene cuello Mao y apliques brillosos de guardas y charreteras en el frente y los hombros. Animate a combinarlo con el Pantalón Ashan Frederique para un total look nocturno e invernal a puro glamour.', '200', '2', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('KIMONO ORIENTAL MIKA', '14950', 'Kimono confeccionado en tejido vaporoso con estampa en blanco y negro. Es largo y liviano, con mangas holgadas. Ideal para combinar con prendas básicas y darle un toque sofisticado a tu look de día.', '200', '2', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('SACO JEANNE GINA','14950', 'Trench confeccionado en tela texturada de algodón con elastano y estampa con efecto batik a dos colores. Tiene cuello con solapas y pespuntes a contratono, lazo de ajuste en la cintura, bolsillos delanteros y botones de carey en el frente. Junto con el Pantalón Gina Mix, forman un total look espectacular.','250', '2', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('SACO BLOCK GEO', '7740', 'Saco corto y liviano con manga larga. Es abierto adelante y tiene moldería recta. Está confeccionado en tejido de algodón con estampa geométrica en verde y tiene bordado de canutillos en el frente.', '150', '2', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('SWEATER SAI', '5950', 'Sweater confeccionado en tejido liviano. Tiene escote redondo, calce holgado y mangas ¾ con volados a la altura de los hombros. Ideal para un look fresco y colorido.', '150', '2', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('BABUCHA VALE MEL', '9900', 'Babucha con elástico en la cintura y ruedo con puño. Es negra y en los laterales tiene galones bordados con hilos metalizados dorados. La podés combinar con una remera lisa para un look cómodo y casual o con la Remera Vale Mel para un total look más llamativo y elegante.', '100', '1', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('PANTALON LANIER', '14999', 'Patalón confeccionado en tejido de lana marrón. Tiene tiro medio con cordón de ajuste en la cintura y calce recto con costuras en el centro de las piernas. Un ítem calentito y confortable, ideal para combinar con el Sweater Lanier en un total look invernal con mucha onda.', '80', '1', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA VALE LUXE', '5900', 'Remera con escote redondo, manga corta y calce recto. Es negra y en los hombros tiene galones bordados con hilos metalizados multicolor.', '90', '1', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('PANTALON SPORTY', '7500', 'Pantalón tipo jogging confeccionado en tejido de algodón. Tiene calce súper holgado, bolsillos laterales y cintura ancha con elástico y cordón de ajuste. Ideal para estar cómoda en casa o combinar con el Buzo Sporty para un total look deportivo.', '52', '1', '1');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('JEAN TANDORI NAITEE', '14.900', 'Jean de tiro medio con calce Oxford y línea A, ajustado en la cintura y suelto desde la cadera hacia el tobillo. Está confeccionado en tejido 100% algodón, azul con lavado stone localizado y detalles gastados en el frente. No llega al piso, así que es ideal para usar con zapatillas en un look bien informal.', '72', '1', '1');

-- niña --

-- niño --


-- tabla rol ---
INSERT INTO `elbuscador1`.`roles` (`id`, `nombre`) VALUES ('1', 'admin');
INSERT INTO `elbuscador1`.`roles` (`id`, `nombre`) VALUES ('2', 'buyer');

-- tabla usuario ---

INSERT INTO `elbuscador1`.`usuarios` (`id`, `nombre`, `email`, `pass`, `rol_id`) VALUES ('1', 'pepe', 'pepe@gmail.com', '123', '1');
INSERT INTO `elbuscador1`.`usuarios` (`id`, `nombre`, `email`, `pass`, `rol_id`) VALUES ('2', 'pancho', 'pancho@gmail.com', '123', '2');
