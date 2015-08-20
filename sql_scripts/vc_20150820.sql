/*
 Navicat MySQL Data Transfer

 Source Server         : 211 mysql
 Source Server Version : 50147
 Source Host           : 10.10.38.211
 Source Database       : vc

 Target Server Version : 50147
 File Encoding         : utf-8

 Date: 08/20/2015 18:21:41 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `lessons`
-- ----------------------------
DROP TABLE IF EXISTS `lessons`;
CREATE TABLE `lessons` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL,
  `description` text NOT NULL,
  `reason` text NOT NULL,
  `solution` text NOT NULL,
  `label` varchar(128) NOT NULL,
  `department` varchar(128) NOT NULL,
  `catalog` varchar(128) NOT NULL,
  `author` varchar(128) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `is_published` smallint(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Table structure for `prize_info`
-- ----------------------------
DROP TABLE IF EXISTS `prize_info`;
CREATE TABLE `prize_info` (
  `id` int(11) NOT NULL COMMENT '主键',
  `name` varchar(128) NOT NULL COMMENT '奖项名称',
  `description` varchar(254) NOT NULL COMMENT '活动说明',
  `content` varchar(254) NOT NULL COMMENT '奖项内容',
  `limits` int(11) NOT NULL DEFAULT '0',
  `status` smallint(6) NOT NULL DEFAULT '0' COMMENT '状态：0启用 1废弃',
  `published_at` date NOT NULL COMMENT '初始化时间',
  `expired_at` date NOT NULL COMMENT '过期时间',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `order` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `prize_info`
-- ----------------------------
BEGIN;
INSERT INTO `prize_info` VALUES ('1', 'guaguaka', '特等奖', 'iPhone6 plus 16G', '5', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1'), ('2', 'guaguaka', '一等奖', 'iPhone 6', '5', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2'), ('3', 'guaguaka', '二等奖', 'Apple Watch', '10', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '3'), ('4', 'guaguaka', '三等奖', 'iPod touch', '20', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '4'), ('5', 'guaguaka', '鼓励奖', 'iPod Shuffle', '20', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '5'), ('6', 'zajindan', '1', '平板电脑', '3', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1'), ('7', 'zajindan', '2', '数码相机', '5', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2'), ('8', 'zajindan', '3', '音箱设备', '10', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '3'), ('9', 'zajindan', '4', '4G优盘', '12', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '4'), ('10', 'zajindan', '5', 'Q币10元', '20', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '5'), ('11', 'zajindan', '6', '下次没准能中奖哦', '50', '0', '0000-00-00', '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '6');
COMMIT;

-- ----------------------------
--  Table structure for `win_info`
-- ----------------------------
DROP TABLE IF EXISTS `win_info`;
CREATE TABLE `win_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` char(20) CHARACTER SET latin1 NOT NULL,
  `prize_id` bigint(20) NOT NULL,
  `is_get` smallint(6) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `prize_name` char(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `win_info`
-- ----------------------------
BEGIN;
INSERT INTO `win_info` VALUES ('1', '15210220960', '1', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'guaguaka'), ('3', '18811311891', '3', '0', '2015-08-12 07:02:20', '2015-08-12 07:02:20', 'guaguaka'), ('4', '13811981119', '5', '0', '2015-08-12 07:05:35', '2015-08-12 07:05:35', 'guaguaka'), ('5', '15210220960', '3', '0', '2015-08-12 07:07:49', '2015-08-12 07:07:49', 'guaguaka'), ('6', '18911889999', '4', '0', '2015-08-12 07:09:17', '2015-08-12 07:09:17', 'guaguaka'), ('7', '18745632112', '1', '0', '2015-08-12 07:14:02', '2015-08-12 07:14:02', 'guaguaka'), ('8', '11111111111', '4', '0', '2015-08-14 08:08:23', '2015-08-14 08:08:23', 'guaguaka'), ('9', '11111111111', '3', '0', '2015-08-14 10:39:25', '2015-08-14 10:39:25', 'guaguaka'), ('10', '13811606832', '4', '0', '2015-08-17 01:44:08', '2015-08-17 01:44:08', 'guaguaka'), ('11', '13874888888', '4', '0', '2015-08-17 02:47:58', '2015-08-17 02:47:58', 'guaguaka');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
