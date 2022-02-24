-- Author: Alec Moldovan
-- Description: This file contains all queries for testing cs340_moldovaa's tables.

-- This tests if we can get the location of the post made! ( TODO: Need to add more posts to test more complex conditions/filters )
SELECT Locations.city, Locations.state, Posts.owner, Posts.caption FROM Posts 
JOIN Locations_Posts  ON Posts.post_id = Locations_Posts.post_id 
JOIN Locations        ON Locations_Posts.location_id = Locations.location_id;

-- Tests referential integrity between posts and comments and replies.
SELECT Comments.owner, Comments.comment_text, Comments.parent_comment_id, Posts.caption, Posts.owner FROM Posts 
JOIN Comments_Posts ON Posts.post_id = Comments_Posts.post_id 
JOIN Comments       ON Comments.comment_id = Comments_Posts.comment_id;

-- Tests referential integrity between posts and likes
SELECT Likes.liked_by, Posts.caption, Posts.owner FROM Posts 
JOIN Likes_Posts  ON Posts.post_id = Likes_Posts.post_id 
JOIN Likes        ON Likes_Posts.like_id = Likes.like_id;

-- Tests referential integrity between Followers and Profiles
SELECT Followers.username AS Followers, Profiles.username AS Profile FROM Profiles 
JOIN Profiles_Followers ON Profiles.username = Profiles_Followers.username 
JOIN Followers          ON Profiles_Followers.follower_id = Followers.follower_id;


-- Tests referential integrity between Followers and Profiles
SELECT Followings.username AS Following, Profiles.username AS Profile FROM Profiles 
JOIN Profiles_Followings  ON Profiles.username = Profiles_Followings.username 
JOIN Followings           ON Profiles_Followings.following_id = Followings.following_id;

