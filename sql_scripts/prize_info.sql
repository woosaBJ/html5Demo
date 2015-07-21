-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2015-07-21 04:56:32
-- 服务器版本： 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `woosa`
--

-- --------------------------------------------------------

--
-- 表的结构 `prize_info`
--

CREATE TABLE IF NOT EXISTS `prize_info` (
  `id` int(11) NOT NULL COMMENT '主键',
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT '奖项名称',
  `description` varchar(254) COLLATE utf8_unicode_ci NOT NULL COMMENT '活动说明',
  `content` varchar(254) COLLATE utf8_unicode_ci NOT NULL COMMENT '奖项内容',
  `status` smallint(6) NOT NULL DEFAULT '0' COMMENT '状态：0启用 1废弃',
  `published_at` date NOT NULL COMMENT '初始化时间',
  `expired_at` date NOT NULL COMMENT '过期时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
