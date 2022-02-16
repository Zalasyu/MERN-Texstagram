-- MySQL DUMP 15.1 Distrib 10.5.13-MariaDB, for debian-linux-gnu (x86_64) using  EditLine wrapper

-- Host: localhost 			Database:Texstagram
-- ----------------------------------------
-- Server Version:  10.5.13-MariaDB


-- Main Tables
DROP TABLE IF EXISTS `Profiles`;
DROP TABLE IF EXISTS `Posts`;
DROP TABLE IF EXISTS `Locations`;
DROP TABLE IF EXISTS `Comments`;
DROP IF TABLE EXISTS `Followers`;
DROP IF TABLE EXISTS `Followings`;

-- Relations Tables
DROP IF TABLE EXISTS `Profiles_Followings`;
DROP IF TABLE EXISTS `Profiles_Followers`;
DROP IF TABLE EXISTS `Profiles_Posts`;
DROP IF TABLE EXISTS `Comments_Posts`;
DROP IF TABLE EXISTS `Locations_Posts`;
DROP IF TABLE EXISTS `Likes_Posts`;

-- Create Profiles Table
CREATE TABLE `Profiles` (
  `username` varchar, not null,
  `profile_pic_url` varchar,
  `profile_pic` blob,
  `full_name` varchar,
  `bio` varchar,
  `num_followers` int, not null,
  `num_following` int, not null,
  `media_count` int, not null,
  `is_business` bool, not null,
  `website_url` varchar,
  `followed_by_user` bool, not null,
  `is_following` bool, not null,
  `is_blocked` bool, not null,
  `is_verified` bool, not null,
  `is_private` bool, not null,
  PRIMARY KEY (`username`)
);

-- Create Posts Table
CREATE TABLE `Posts` (
  `post_id` int,
  `owner` varchar, not null,
  `post_date` datetime, not null,
  `caption` text,
  `comments_count` int, not null,
  `likes_count` int, not null,
  `display_url` varchar, not null,
  `is_video` bool , not null,
  `video_view_count` int,
  `video_url` varchar,
  `has_audio` bool, not null,
  `video_pay_count` int,
  `video_duration` int,
  `status` bool, not null,
  PRIMARY KEY (`post_id`),
  FOREIGN KEY (`owner`) REFERENCES `Profiles`(`username`)
);

-- Create Locations Table
CREATE TABLE `Locations` (
  `location_id` int,
  `city` varchar, not null,
  `state` varchar, not null,
  PRIMARY KEY (`location_id`)
);

-- Create Junction Table between Posts and Locations
CREATE TABLE `Locations_Posts` (
  `post_id` int, not null,
  `location_id` int, not null
  FOREIGN KEY (`location_id`) REFERENCES `Locations`(`location_id`),
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`)
);

-- Create Comments Table
CREATE TABLE `Comments` (
  `comment_id` int,
  `owner` varchar, not null,
  `comment_text` text,
  `parent_comment_id` int,
  PRIMARY KEY (`comment_id`),
  FOREIGN KEY (`parent_comment_id`) REFERENCES `Comments`(`comment_id`),
);

CREATE TABLE `Comments_Posts` (
  `post_id` int, not null,
  `comment_id` int, not null,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`)
  FOREIGN KEY (`comment_id`) REFERENCES `Comments`(`comment_id`)
);

-- Create Likes Table
CREATE TABLE `Likes` (
  `like_id` int,
  `liked_by` varchar, not null,
  PRIMARY KEY (`like_id`),
);

-- Create Junction Table between Likes and Posts
CREATE TABLE `Likes_Posts` (
  `post_id` int, not null,
  `like_id` int, not null,
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`post_id`)
  FOREIGN KEY (`like_id`) REFERENCES `Likes`(`like_id`)
);

-- Create Followers Table
CREATE TABLE `Followers` (
  `follower_id` int,
  `username` varchar, not null,
  PRIMARY KEY (`follower_id`)
);

-- Create Junction Table between  Profiles and Followers
CREATE TABLE `Profiles_Followers` (
  `username` varchar, not null,
  `follower_id` int, not null,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`),
  FOREIGN KEY (`follower_id`) REFERENCES `Followers`(`follower_id`)
);

-- Create Followings Table
CREATE TABLE `Followings` (
  `follower_id` int,
  `username` varchar, not null,
  PRIMARY KEY (`follower_id`)
);

-- Create Junction table between Profiles and Followings
CREATE TABLE `Profiles_Followings` (
  `username` varchar, not null,
  `following_id` int, not null,
  FOREIGN KEY (`username`) REFERENCES `Profiles`(`username`),
  FOREIGN KEY (`following_id`) REFERENCES `Followings`(`follower_id`)
);


