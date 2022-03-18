-- MySQL DUMP 15.1 Distrib 10.5.13-MariaDB, for debian-linux-gnu (x86_64) using  EditLine wrapper

-- Host: localhost 			Database:Texstagram
-- ----------------------------------------
-- Server Version:  10.5.13-MariaDB



-- Relations Tables
DROP TABLE IF EXISTS `Profiles_Followings`;
DROP TABLE IF EXISTS `Profiles_Followers`;
DROP TABLE IF EXISTS `Profiles_Posts`;
DROP TABLE IF EXISTS `Comments_Posts`;
DROP TABLE IF EXISTS `Locations_Posts`;
DROP TABLE IF EXISTS `Likes_Posts`;

-- Main Tables
DROP TABLE IF EXISTS `Posts`;
DROP TABLE IF EXISTS `Profiles`;
DROP TABLE IF EXISTS `Locations`;
DROP TABLE IF EXISTS `Comments`;
DROP TABLE IF EXISTS `Likes`;
DROP TABLE IF EXISTS `Followers`;
DROP TABLE IF EXISTS `Followings`;


-- Create Profiles Table
CREATE TABLE `Profiles` (
  `username`          VARCHAR(255) UNIQUE NOT NULL,
  `profile_pic_url`       VARCHAR(255) NOT NULL,
  `full_name`         VARCHAR(255) NOT NULL,
  `password`          VARCHAR(255) NOT NULL,
  `bio`               TEXT,
  `num_followers`     INT DEFAULT 0 NOT NULL,
  `num_following`     INT DEFAULT 0 NOT NULL,
  `media_count`       INT DEFAULT 0 NOT NULL,
  `is_business`       BOOLEAN DEFAULT false,
  `website_url`       VARCHAR(255),
  `followed_by_user`  BOOLEAN DEFAULT false,
  `is_following`      BOOLEAN DEFAULT false,
  `is_blocked`        BOOLEAN DEFAULT false,
  `is_verified`       BOOLEAN DEFAULT false,
  `is_private`        BOOLEAN DEFAULT false,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB;

-- Create Posts Table
CREATE TABLE `Posts` (
  `post_id`           INT AUTO_INCREMENT NOT NULL,
  `owned_by`          VARCHAR(255) NOT NULL,
  `location`          INT,
  `post_date`         DATE,
  `caption`           TEXT,
  `comments_count`    INT DEFAULT 0,
  `likes_count`       INT DEFAULT 0,
  `media`             VARCHAR(255) NOT NULL,
  `is_video`          BOOLEAN DEFAULT false,
  `video_view_count`  INT,
  `video_url`         VARCHAR(255),
  `has_audio`         BOOLEAN,
  `video_duration`    INT,
  PRIMARY KEY (`post_id`),
  FOREIGN KEY (`owned_by`) REFERENCES `Profiles`(`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `Likes` (
  `like_id`   INT AUTO_INCREMENT NOT NULL,
  `liked_by`  VARCHAR(255) NOT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB;

CREATE TABLE `Likes_Posts` (
  `post_id` INT NOT NULL,
  `like_id` INT NOT NULL,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`like_id`) REFERENCES `Likes`(`like_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `Followings` (
  `following_id` INT NOT NULL,
  `username`    VARCHAR(255) NOT NULL,
  PRIMARY KEY (`following_id`)
) ENGINE=InnoDB;

CREATE TABLE `Profiles_Followings` (
  `username`      VARCHAR(255) NOT NULL,
  `following_id`  INT NOT NULL,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`following_id`) REFERENCES `Followings`(`following_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `Locations` (
  `location_id` INT NOT NULL AUTO_INCREMENT,
  `city`        VARCHAR(255) NOT NULL,
  `state`       VARCHAR(255) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB;

CREATE TABLE `Locations_Posts` (
  `post_id`    INT NOT NULL,
  `location_id` INT NOT NULL,
  FOREIGN KEY (`location_id`) REFERENCES `Locations`(`location_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `Comments` (
  `comment_id`        INT,
  `owner`             VARCHAR(255) NOT NULL,
  `comment_text`      text,
  `parent_comment_id` INT,
  PRIMARY KEY (`comment_id`),
  FOREIGN KEY (`parent_comment_id`) REFERENCES `Comments`(`comment_id`)
) ENGINE=InnoDB;

CREATE TABLE `Comments_Posts` (
  `post_id`       INT NOT NULL,
  `comment_id`    INT NOT NULL,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`comment_id`) REFERENCES `Comments`(`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `Followers` (
  `follower_id`   INT NOT NULL,
  `username`      VARCHAR(255) NOT NULL,
  PRIMARY KEY (`follower_id`)
) ENGINE=InnoDB;

--CREATE TABLE `Profiles_Posts` (
--  `username`    VARCHAR(255),
--  `post_id`     INT NOT NULL,
--  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`) ON DELETE CASCADE ON UPDATE CASCADE,
--  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE
--) ENGINE=InnoDB;

CREATE TABLE `Profiles_Followers` (
  `username`    VARCHAR(255) NOT NULL,
  `follower_id` INT NOT NULL,
  FOREIGN KEY (`follower_id`) REFERENCES `Followers`(`follower_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
