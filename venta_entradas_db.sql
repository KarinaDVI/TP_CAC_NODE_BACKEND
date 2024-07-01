-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2024 a las 05:47:13
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `venta_entradas_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shows`
--

CREATE TABLE `shows` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `fecha` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `shows`
--

INSERT INTO `shows` (`id`, `nombre`, `img`, `fecha`, `descripcion`) VALUES
(1, 'Kapanga', 'someeee', '25/09/2024', ''),
(2, 'Los Pericos', 'some2', '26/09/2024', ''),
(3, 'Kapanga', 'someeee', '25/09/2024', ''),
(4, 'Los Pericos', 'some2', '26/09/2024', ''),
(5, 'La Renga', 'some3', '30/11/2024', ''),
(6, 'La Renga', 'some3', '30/11/2024', ''),
(7, 'Evankell', 'some5', '21/12/2024', ''),
(8, 'Evankell', 'some5', '21/12/2024', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `shows`
--
ALTER TABLE `shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
