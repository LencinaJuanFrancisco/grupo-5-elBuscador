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
INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('SWEATER VALENTINA 1-3', '4190', 'Sweater de viscosa y poliamida con bordado en lentejuelas y botones en el hombro.', '100', '2', '2');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('CAMPERA CATY 1-3', '3890', 'Campera de microfibra rellena de guata con bolsillos con botones, cierre frontal. Piel en capucha', '100', '2', '2');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA BEGONIA 1-3', '1070', 'Remera manga larga de jersey con elastano estampado y lleva broches en la espalda.', '100', '2', '2');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA KAREN 1-3', '1130', 'Remera manga larga con estampa de glitter. Es de jersey con elastano rayado. Lleva boton en la espalda hasta el talle 2.', '100', '2', '2');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('SWEATER CARMELA 4-12', '4390', 'Sweater de algodón con bordado en lentejuelas.', '100', '2', '2');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('PANTALON DENIM OXFORD 4-14', '2090', 'Pantalón oxford de denim con lavado stonewash y localizado. Lleva elástico interno con ojal para ajustar cintura.', '100', '1', '2');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('PANTALON CORDEROY AMELIA 4-14', '1730', 'Pantalón ancho de corderoy acanalado, con elástico en la cintura.', '100', '1', '2');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA SPEED 4-14', '1990', 'Remera manga larga de jersey vanizado con estampa en delantero en degrade de colores y glitter. Detalle de espalda mas larga que el delantero.', '100', '1', '2');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA HUGS 4-12', '1170', 'Remera manga larga con estampa con glitter. Es de jersey 100% algodón.', '100', '1', '2');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA NICOLE 4-14', '1170', 'Remera manga larga con estampa. Es de jersey 100% algodon con cuello de ribb.', '100', '1', '2');


-- niño --
INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('BUZO TROOPER 4-12', '4190', 'Buzo deportivo abierto con capucha y bolsillos laterales , en frisa con elastano camuflada y negra. Cierre a contratono y estampa en fluo en relieve. Ojal en punos para pasar el pulgar.', '100', '2', '3');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA GAEL 4-14', '1110', 'Remera manga larga con estampa y aplique. Es de jersey 100% algodon con cuello de ribb.', '100', '1', '3');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA BENNET 4-14', '1170', 'Remera manga larga con estampa. Es de jersey 100% algodón con cuello de ribb.', '100', '1', '3');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('CAMPERA BENJA XL', '3710', 'Campera de nylon matelaseado rellena de guata siliconada, con cierre. Parche de goma y cinta estampada en brazos', '100', '2', '3');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA JOY 4-12', '1950', 'Remera de jersey 100% algodon con estampa con detalles en relieve y fluo', '100', '1', '3');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA COSME 4-14', '1500', 'Remera manga larga con estampa. Es de jersey 100% algodon con cuello de ribb.', '100', '1', '3');

INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA LOLO 4-8', '1250', 'Remera manga larga con estampa. Es de jersey 100% algodón con cuello de ribb.', '100', '1', '3');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('PANTALON DENIM BORJA 1-3', '1790', 'Pantalón super skinny de denim con lavado stonewash, localizado y efectoarrugas con relieve 3d. Lleva elástico interno con ojal para ajustar cintura.', '100', '1', '3');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('ZAPATILLAS KYLE 18-24', '1790', 'Zapatillas con tiras de velcro en sintético y detalle de estrella en caña lateral a contracolor', '100', '1', '3');


INSERT INTO `elbuscador1`.`productos` (`nombre`, `precio`, `descripcion`, `cantidad`, `temporada_id`, `genero_id`) 
VALUES ('REMERA THOMAS 1-3', '1130', 'Remera manga larga con estampa. Es de jersey rayado 100% algodón con cuello de ribb. Lleva broches en el hombro hasta el talle 2.', '100', '1', '3');




-- tabla rol ---
INSERT INTO `elbuscador1`.`roles` (`id`, `nombre`) VALUES ('1', 'admin');
INSERT INTO `elbuscador1`.`roles` (`id`, `nombre`) VALUES ('2', 'buyer');

-- tabla usuario ---

INSERT INTO `elbuscador1`.`usuarios` (`id`, `nombre`, `email`, `pass`, `rol_id`) VALUES ('1', 'pepe', 'pepe@gmail.com', '123', '1');
INSERT INTO `elbuscador1`.`usuarios` (`id`, `nombre`, `email`, `pass`, `rol_id`) VALUES ('2', 'pancho', 'pancho@gmail.com', '123', '2');

-- tabla imagenes
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('1', 'saco-jeanne-gina.jpg', '78');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('2', 'saco-jeanne-gina.jpg', '79');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('3', 'saco-jeanne-gina.jpg', '80');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('4', 'saco-jeanne-gina.jpg', '81');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('5', 'saco-jeanne-gina.jpg', '82');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('6', 'saco-jeanne-gina.jpg', '83');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('7', 'saco-jeanne-gina.jpg', '84');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('8', 'saco-jeanne-gina.jpg', '85');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('9', 'saco-jeanne-gina.jpg', '86');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('10', 'saco-jeanne-gina.jpg', '87');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('11', 'saco-jeanne-gina.jpg', '88');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('12', 'saco-jeanne-gina.jpg', '89');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('13', 'saco-jeanne-gina.jpg', '90');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('14', 'saco-jeanne-gina.jpg', '91');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('15', 'saco-jeanne-gina.jpg', '92');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('16', 'saco-jeanne-gina.jpg', '93');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('17', 'saco-jeanne-gina.jpg', '94');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('18', 'saco-jeanne-gina.jpg', '95');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('19', 'saco-jeanne-gina.jpg', '96');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('20', 'saco-jeanne-gina.jpg', '97');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('21', 'saco-jeanne-gina.jpg', '98');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('22', 'saco-jeanne-gina.jpg', '99');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('23', 'saco-jeanne-gina.jpg', '100');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('24', 'saco-jeanne-gina.jpg', '101');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('25', 'saco-jeanne-gina.jpg', '102');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('26', 'saco-jeanne-gina.jpg', '103');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('27', 'saco-jeanne-gina.jpg', '104');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('28', 'saco-jeanne-gina.jpg', '105');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('29', 'saco-jeanne-gina.jpg', '106');
INSERT INTO `elbuscador1`.`imagenes` (`id`, `nombre`, `producto_id`) VALUES ('30', 'saco-jeanne-gina.jpg', '107');