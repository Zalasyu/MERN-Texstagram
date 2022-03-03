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
CREATE TABLE `Posts` (
  `post_id`           INT AUTO_INCREMENT NOT NULL,
  `owner`             VARCHAR(255) NOT NULL,
  `location`          INT,
  `post_date`         DATE,
  `caption`           TEXT,
  `comments_count`    INT DEFAULT 0,
  `likes_count`       INT DEFAULT 0,
  `display_url`       VARCHAR(255) NOT NULL,
  `is_video`          BOOLEAN NOT NULL,
  `video_view_count`  INT,
  `video_url`         VARCHAR(255),
  `has_audio`         BOOLEAN,
  `video_duration`    INT,
  `status`            VARCHAR(5) NOT NULL,
  PRIMARY KEY (`post_id`)
);

CREATE TABLE `Likes` (
  `like_id`   INT,
  `liked_by`  VARCHAR(255) NOT NULL,
  PRIMARY KEY (`like_id`)
);

CREATE TABLE `Likes_Posts` (
  `post_id` INT NOT NULL,
  `like_id` INT NOT NULL,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`),
  FOREIGN KEY (`like_id`) REFERENCES `Likes`(`like_id`)
);

CREATE TABLE `Profiles` (
  `username`          VARCHAR(255) UNIQUE NOT NULL,
  `profile_pic_url`   VARCHAR(255),
  `full_name`         VARCHAR(255) NOT NULL,
  `password`          VARCHAR(255) NOT NULL,
  `bio`               TEXT,

  `num_followers`     INT DEFAULT 0,
  `num_following`     INT DEFAULT 0,
  `media_count`       INT DEFAULT 0,
  `is_business`       BOOLEAN DEFAULT false,
  `website_url`       VARCHAR(255),
  `followed_by_user`  BOOLEAN DEFAULT false,
  `is_following`      BOOLEAN DEFAULT false,
  `is_blocked`        BOOLEAN DEFAULT false,
  `is_verified`       BOOLEAN DEFAULT false,
  `is_private`        BOOLEAN DEFAULT false,
  PRIMARY KEY (`username`)
);

CREATE TABLE `Followings` (
  `following_id` INT,
  `username`    VARCHAR(255) NOT NULL,
  PRIMARY KEY (`following_id`)
);

CREATE TABLE `Profiles_Followings` (
  `username`      VARCHAR(255) NOT NULL,
  `following_id`  INT NOT NULL,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`),
  FOREIGN KEY (`following_id`) REFERENCES `Followings`(`following_id`)
);

CREATE TABLE `Locations` (
  `location_id` INT,
  `city`        VARCHAR(255) NOT NULL,
  `state`       VARCHAR(255) NOT NULL,
  PRIMARY KEY (`location_id`)
);

CREATE TABLE `Locations_Posts` (
  `post_id`    INT NOT NULL,
  `location_id` INT NOT NULL,
  FOREIGN KEY (`location_id`) REFERENCES `Locations`(`location_id`),
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`)
);

CREATE TABLE `Comments` (
  `comment_id`        INT,
  `owner`             VARCHAR(255) NOT NULL,
  `comment_text`      text,
  `parent_comment_id` INT,
  PRIMARY KEY (`comment_id`),
  FOREIGN KEY (`parent_comment_id`) REFERENCES `Comments`(`comment_id`)
);

CREATE TABLE `Comments_Posts` (
  `post_id`       INT NOT NULL,
  `comment_id`    INT NOT NULL,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`),
  FOREIGN KEY (`comment_id`) REFERENCES `Comments`(`comment_id`)
);

CREATE TABLE `Followers` (
  `follower_id`   INT,
  `username`      VARCHAR(255) NOT NULL,
  PRIMARY KEY (`follower_id`)
);

CREATE TABLE `Profiles_Posts` (
  `username`    VARCHAR(255),
  `post_id`     INT NOT NULL,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`),
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`)
);

CREATE TABLE `Profiles_Followers` (
  `username`    VARCHAR(255) NOT NULL,
  `follower_id` INT NOT NULL,
  FOREIGN KEY (`follower_id`) REFERENCES `Followers`(`follower_id`),
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`)
);


-- INSERT DUMMY DATA FOR ALL TABLES

-- Add a Profile to Profiles Table
INSERT INTO `Profiles`(`username`, `profile_pic_url`, `full_name`, `password`, `bio`, `num_followers`, `num_following`, `media_count`, `is_business`, `website_url`, `followed_by_user`, `is_following`, `is_blocked`, `is_verified`, `is_private`) VALUES ("Dyras", "Some URL for the profile pic", "Alec Moldovan", "pass123", "Per aspera ad astra. Hic Sunt Dracones.", 0,0, 0, false,"https://medium.com/alec.moldovan", false, false, false, true, false);

-- Second Profile
INSERT INTO `Profiles`(`username`, `profile_pic_url`, `full_name`, `password`, `bio`, `num_followers`, `num_following`, `media_count`, `is_business`, `website_url`, `followed_by_user`, `is_following`, `is_blocked`, `is_verified`, `is_private`) VALUES ("SkaterDude", "Some URL for the profile pic", "Michael Morriss", "123", "San Antonio Vibes!", 0,0, 0, false,"https://medium.com/micahel.morriss", false, false, false, true, false);
-- Add a Post to Posts Table
INSERT INTO `Posts`(`post_id`, `owner`, `post_date`, `caption`, `display_url`, `is_video`, `status`) VALUES (1, "Dyras", "2022-02-21", "This is my first post on Texstagram!", "This will be a display url to our saved photos on our server.", False, "OK");

-- Link Post to Profile Table
INSERT INTO `Profiles_Posts` VALUES ("Dyras", 1);

-- Add a location to Locations Table
INSERT INTO `Locations` VALUES (1, "Austin", "Texas");

-- Link Locations to Posts Table
INSERT INTO `Locations_Posts` VALUES (1,1);

--Add a Comment to our first post from Dyras!
INSERT INTO `Comments`(`comment_id`, `owner`, `comment_text`) VALUES (1, "SkaterDude", "Welcome bud! Glad you signed up!");
INSERT INTO `Comments`(`comment_id`, `owner`, `comment_text`, `parent_comment_id`) VALUES (2, "Dyras", "Thank you SkaterDude! How are ya?!", 1);

-- Link Comment to Dyras' first post by Alec Moldovan
INSERT INTO `Comments_Posts` VALUES (1,1);
INSERT INTO `Comments_Posts` VALUES (1,2);

-- TODO: Add a transcation to update the comment_count upon each comment and reply made!

-- Add likes to our first Post!
INSERT INTO `Likes` VALUES (1, "SkaterDude");

--Link the Like to the first post
INSERT INTO `Likes_Posts` VALUES (1, 1);

-- Add a follower for Dyras!
INSERT INTO `Followers` VALUES (1, "SkaterDude");

-- Link Followers to Dyras Profile
INSERT INTO `Profiles_Followers` VALUES ("Dyras", 1);

--Dyras starts following SkaterDude!
INSERT INTO `Followings` VALUES (1, "SkaterDude");

-- Link Followers to Dyras Profile
INSERT INTO `Profiles_Followings` VALUES ("Dyras", 1);
