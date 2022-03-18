// Author: Alec Moldovan
// Description: The UI for creating a post. Notable Feature: Dropdown menu users dynamically mapped to database.
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// TODO: Create dropdown menus that maps to locations and profiles.
const Create = () => {
  const [caption, setCaption] = useState();
  const [username, setUsername] = useState();
  const [location, setLocation] = useState();
  const [media, setMedia] = useState();
  const navigate = useNavigate;

  const send = event =>{
    const data = new FormData();
    data.append("username", username);
    data.append("caption", caption);
    data.append("location", location);
    data.append("file", media);

    axios.post(`http://localhost:8000/create`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigate("/Home");

  };
  return(
    <div className = "registration">
      <h1>Register</h1>
      
      <form action="#">
        
        <div className="flex">
          <label htmlFor="username">Username</label>
          <input 
            required 
            type="text" 
            id="username"
            name="username"
            placeholder="Enter name"
            onChange={event => {
              const { value } = event.target;
              setUsername(value);
          }}
          />
        </div>
        <div className="flex">
          <label htmlFor="location">Username</label>
          <input 
            required
            type="text" 
            id="location"
            name="location"
            placeholder="Enter locaion"
            onChange={event => {
              const { value } = event.target;
              setUsername(value);
          }}
          />
        </div>
        <div className="flex">
          <label htmlFor="pwd">Location</label>
          <input 
            required
            type="text" 
            id="caption" 
            name="caption"
            placeholder="Enter caption"
            onChange={event => {
              const { value } = event.target;
              setCaption(value);
          }}
            />
        </div>
        <div className="flex">
          <label htmlFor="media">Upload Media</label>
          <input 
            required
            type="file" 
            id="file"
            accept=".jpg"
            placeholder="Upload jpg file"
            onChange={event => {
              const media = event.target.files[0];
              setMedia(media);
          }}

          />
        </div>
      </form>
      <button onClick={send}>Register</button>
    </div>
  );
}

export default Create;
