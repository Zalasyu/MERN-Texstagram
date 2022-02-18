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
  `username` VARCHAR(255) NOT NULL,
  `profile_pic_url` VARCHAR(255),
  `profile_pic` blob NOT NULL,
  `full_name` VARCHAR(255) NOT NULL,
  `bio` VARCHAR(255),
  `num_followers` INT NOT NULL,
  `num_following` INT NOT NULL,
  `media_count` INT NOT NULL,
  `is_business` BOOLEAN NOT NULL,
  `website_url` VARCHAR(255),
  `followed_by_user` BOOLEAN NOT NULL,
  `is_following` BOOLEAN NOT NULL,
  `is_blocked` BOOLEAN NOT NULL,
  `is_verified` BOOLEAN NOT NULL,
  `is_private` BOOLEAN NOT NULL,
  PRIMARY KEY (`username`)
);

-- Create Posts Table
CREATE TABLE `Posts` (
  `post_id` INT NOT NULL auto_increment,
  `owner` VARCHAR(255) NOT NULL,
  `post_date` DATETIME NOT NULL,
  `caption` text,
  `comments_count` INT NOT NULL,
  `likes_count` INT NOT NULL,
  `display_url` VARCHAR(255) NOT NULL,
  `is_video` BOOLEAN NOT NULL,
  `video_view_count` INT,
  `video_url` VARCHAR(255),
  `has_audio` BOOLEAN NOT NULL,
  `video_pay_count` INT,
  `video_duration` INT,
  `status` BOOLEAN NOT NULL,
  PRIMARY KEY (`post_id`),
  FOREIGN KEY (`owner`) REFERENCES `Profiles`(`username`) 
);

-- Create Locations Table
CREATE TABLE `Locations` (
  `location_id` INT NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `state` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`location_id`)
);

-- Create Junction Table between Posts and Locations
CREATE TABLE `Locations_Posts` (
  `post_id` INT NOT NULL,
  `location_id` INT NOT NULL,
  FOREIGN KEY (`location_id`) REFERENCES `Locations`(`location_id`),
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`)
);

-- Create Comments Table
CREATE TABLE `Comments` (
  `comment_id` INT NOT NULL,
  `owner` VARCHAR(255) NOT NULL,
  `comment_text` TEXT NOT NULL,
  `parent_comment_id` INT,
  PRIMARY KEY (`comment_id`),
  FOREIGN KEY (`parent_comment_id`) REFERENCES `Comments`(`comment_id`)
);

CREATE TABLE `Comments_Posts` (
  `post_id` INT NOT NULL,
  `comment_id` INT NOT NULL,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`),
  FOREIGN KEY (`comment_id`) REFERENCES `Comments`(`comment_id`)
);

-- Create Likes Table
CREATE TABLE `Likes` (
  `like_id` INT NOT NULL,
  `liked_by` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`like_id`)
);

-- Create Junction Table between Likes and Posts
CREATE TABLE `Likes_Posts` (
  `post_id` INT NOT NULL,
  `like_id` INT NOT NULL,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`),
  FOREIGN KEY (`like_id`) REFERENCES `Likes`(`like_id`)
);

-- Create Followers Table
CREATE TABLE `Followers` (
  `follower_id` INT NOT NULL,
  `username` VARCHAR(255),
  PRIMARY KEY (`follower_id`)
);

-- Create Junction Table between  Profiles and Followers
CREATE TABLE `Profiles_Followers` (
  `username` VARCHAR(255) NOT NULL,
  `follower_id` INT NOT NULL,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`),
  FOREIGN KEY (`follower_id`) REFERENCES `Followers`(`follower_id`)
);

-- Create Followings Table
CREATE TABLE `Followings` (
  `follower_id` INT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`follower_id`)
);

-- Create Junction table between Profiles and Followings
CREATE TABLE `Profiles_Followings` (
  `username` VARCHAR(255) NOT NULL,
  `following_id` INT NOT NULL,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`),
  FOREIGN KEY (`following_id`) REFERENCES `Followings`(`follower_id`)
);

-- INSERT DUMMY DATA FOR ALL TABLES
