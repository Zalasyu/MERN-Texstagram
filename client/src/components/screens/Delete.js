// Author: Alec Moldovan
//Description: This is a page for deleting posts under a user. 
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const handleClick = () => {



};

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return(
    <div>
    <h1>Profile Page for {username}</h1>

    </div>


  )


}
export default Profile;
