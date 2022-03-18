-- MySQL DUMP 15.1 Distrib 10.5.13-MariaDB, for debian-linux-gnu (x86_64) using  EditLine wrapper

-- Host: localhost 			Database:Texstagram
-- ----------------------------------------
-- Server Version:  10.5.13-MariaDB

-- INSERT DUMMY DATA FOR ALL TABLES

-- Variable
SET @IncrementValue = 1;



-- Add a Profile to Profiles Table
INSERT INTO `Profiles`(`username`, `profile_pic_url`, `full_name`, `password`, `bio`, `num_followers`, `num_following`, `media_count`, `is_business`, `website_url`, `followed_by_user`, `is_following`, `is_blocked`, `is_verified`, `is_private`) VALUES ("Dyras", "Some URL for the profile pic", "Alec Moldovan", "pass123", "Per aspera ad astra. Hic Sunt Dracones.", 0,0, 0, false,"https://medium.com/alec.moldovan", false, false, false, true, false);

-- Second Profile
INSERT INTO `Profiles`(`username`, `profile_pic_url`, `full_name`, `password`, `bio`, `num_followers`, `num_following`, `media_count`, `is_business`, `website_url`, `followed_by_user`, `is_following`, `is_blocked`, `is_verified`, `is_private`) VALUES ("SkaterDude", "Some URL for the profile pic", "Michael Morriss", "123", "San Antonio Vibes!", 0,0, 0, false,"https://medium.com/micahel.morriss", false, false, false, true, false);
-- Add a Post to Posts Table
INSERT INTO `Posts`(`post_id`, `owned_by`, `post_date`, `caption`, `media`, `is_video`) VALUES (1, "Dyras", "2022-02-21", "This is my first post on Texstagram!", "This will be a display url to our saved photos on our server.", False);

-- Link Post to Profile Table
-- INSERT INTO `Profiles_Posts` VALUES ("Dyras", 1);

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

-- Add likes to our first Post!
INSERT INTO `Likes` VALUES (1, "SkaterDude");
UPDATE Posts SET likes_count = likes_count + @IncrementValue WHERE post_id=1;

--Link the Like to the first post
INSERT INTO `Likes_Posts` VALUES (1, 1);

-- Add a follower for Dyras!
INSERT INTO `Followers` VALUES (1, "SkaterDude");
UPDATE Profiles SET num_followers = num_followers + @IncrementValue WHERE username="Dyras";

-- Link Followers to Dyras Profile
INSERT INTO `Profiles_Followers` VALUES ("Dyras", 1);

--Dyras starts following SkaterDude!
INSERT INTO `Followings` VALUES (1, "SkaterDude");
UPDATE Profiles SET num_followers = num_followers + @IncrementValue WHERE username="SkaterDude";

-- Link Followers to Dyras Profile
INSERT INTO `Profiles_Followings` VALUES ("Dyras", 1);

-- Delete Profile (NOTE: Posts table doesn't have a foreign key that directly relates it to Profiles.) (UPDATE: Fixed by directly relating Posts.owned_by to Profiles.username instead of having a bridge table.")
DELETE FROM Profiles WHERE username="Dyras";
DELETE FROM Posts WHERE owned_by=""

-- Re-Insert Dyras and his post!
INSERT INTO `Profiles`(`username`, `profile_pic_url`, `full_name`, `password`, `bio`, `num_followers`, `num_following`, `media_count`, `is_business`, `website_url`, `followed_by_user`, `is_following`, `is_blocked`, `is_verified`, `is_private`) VALUES ("Dyras", "Some URL for the profile pic", "Alec Moldovan", "pass123", "Per aspera ad astra. Hic Sunt Dracones.", 0,0, 0, false,"https://medium.com/alec.moldovan", false, false, false, true, false);
INSERT INTO `Posts`(`post_id`, `owned_by`, `post_date`, `caption`, `media`, `is_video`) VALUES (1, "Dyras", "2022-02-21", "This is my first post on Texstagram!", "This will be a display url to our saved photos on our server.", False);
