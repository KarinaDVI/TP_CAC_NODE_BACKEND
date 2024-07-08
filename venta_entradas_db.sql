-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2024 a las 10:35:51
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
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `id_ad` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id_venta` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_show` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(255) NOT NULL,
  `estado_compra` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`id_venta`, `id_user`, `id_show`, `cantidad`, `precio`, `estado_compra`) VALUES
(93, 17, 11, 1, 50000, ''),
(101, 17, 11, 1, 50000, 'en carrito'),
(102, 17, 11, 1, 50000, 'en carrito'),
(103, 17, 9, 1, 18000, 'finalizado'),
(104, 17, 14, 1, 25000, 'en carrito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shows`
--

CREATE TABLE `shows` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `fecha` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `shows`
--

INSERT INTO `shows` (`id`, `nombre`, `img`, `fecha`, `descripcion`, `precio`) VALUES
(9, 'Calamity', '/images/4196e1fe-c3ae-4bf6-bb41-f9d6bad8a3bf.jpg', '2024-08-03', 'Algo esta llegando', 18000),
(11, 'Decadentes', '/images/logo-los-autenticos-decadentes.png', '2024-11-15', 'El regreso', 50000),
(12, 'Tini', '/images/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', '2024-08-10', 'long play', 15000),
(14, 'Kapanga', '/images/kapanga.jpg', '2024-07-21', 'Proximamente', 25000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `ciudad` varchar(30) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `clave` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `username`, `ciudad`, `email`, `clave`) VALUES
(15, 'user7', 'Tres de febrero', 'karina.bouza@hotmail.com', '$2a$08$FnD5WRM/6IJyeTm5923mjODvoMidRVXWXqNmxHwI4xXF.ZOXoPzIe'),
(16, 'user7', 'Tres de febrero', 'karina.bouza@hotmail.com', '$2a$08$WY5eHTDzvwxnoYqcGOnQG.4xixqLuZshoFDcAeDvMtuLVaPtH8t3S'),
(17, 'user8', 'Tres de febrero', 'karina.bouza@hotmail.com', '$2a$08$T3BsmYA11J48fU6e/zDgOeuC.YL/KPpWQFbEq2MgfK7vH305bw9lW'),
(19, 'i_lgfm@hotmail.com', 'user8', 'i_lgfm@hotmail.com', '$2a$08$DPZrwmXy.DOfEOVyIzzUQOa.A5Y7zEBG.TmYKvX99QbYlAlTvT0VG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_ad`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_venta`);

--
-- Indices de la tabla `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admins`
--
ALTER TABLE `admins`
  MODIFY `id_ad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT de la tabla `shows`
--
ALTER TABLE `shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
