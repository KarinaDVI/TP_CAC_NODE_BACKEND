-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-07-2024 a las 23:27:47
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `venta_entradasdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `id_ad` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shows`
--

INSERT INTO `shows` (`id`, `nombre`, `img`, `fecha`, `descripcion`, `precio`) VALUES
(11, 'Decadentes', '/images/lad.jpg', '2024-11-15', 'El regreso', 30000),
(12, 'Tini', '/images/Tini.jpg', '2024-08-10', 'long play', 15000),
(14, 'Kapanga', '/images/kapanga.jpg', '2024-07-21', 'Proximamente', 25000),
(16, 'Los Pericos', '/images/pericos.jpg', '2024-10-06', 'Show', 6000),
(17, 'Lali Espósito', '/images/lali.jpg', '2023-11-20', 'Show', 30000),
(19, 'Luciano Pereyra', '/images/luciano-pereryra-gentileza.jpg', '2024-12-12', 'Show', 25000),
(21, 'Circ dul soleil', '/images/42cf3271-9c2c-4ace-b6fc-ea048c8bd285.jpg', '2025-03-31', 'Teatro', 25000),
(22, 'Fuerza Bruta', '/images/fuerza-bruta-1545951.jpg', '2024-11-28', 'Show', 18000),
(23, 'Esperando la carroza', '/images/carroza.jpg', '2025-03-30', 'Teatro', 20);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `username`, `ciudad`, `email`, `clave`) VALUES
(15, 'user7', 'Tres de febrero', 'karina.bouza@hotmail.com', '$2a$08$FnD5WRM/6IJyeTm5923mjODvoMidRVXWXqNmxHwI4xXF.ZOXoPzIe'),
(16, 'user7', 'Tres de febrero', 'karina.bouza@hotmail.com', '$2a$08$WY5eHTDzvwxnoYqcGOnQG.4xixqLuZshoFDcAeDvMtuLVaPtH8t3S'),
(17, 'user8', 'Tres de febrero', 'karina.bouza@hotmail.com', '$2a$08$T3BsmYA11J48fU6e/zDgOeuC.YL/KPpWQFbEq2MgfK7vH305bw9lW'),
(19, 'i_lgfm@hotmail.com', 'user8', 'i_lgfm@hotmail.com', '$2a$08$DPZrwmXy.DOfEOVyIzzUQOa.A5Y7zEBG.TmYKvX99QbYlAlTvT0VG'),
(20, 'Lucila Paiva', 'CABA', 'lucilapaivayoga@gmail.com', '$2a$08$LwS6iPcbW1G00TDyApMFpeY45Xn5WVRG96mZz07a.Z2JzRzXuX2m.');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
