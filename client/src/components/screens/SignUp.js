import React, {useState} from 'react';
import axios from 'axios';


const SignUp = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [media, setMedia] = useState();

  const send = event =>{
    const data = new FormData();
    data.append("name", name);
    data.append("username", username);
    data.append("password", password);
    data.append("file", media);

    axios.post("http://localhost:8000/signup", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));

  };
  return(
    <div className = "registration">
      <h1>Register</h1>
      
      <form action="#">
        <div className="flex">
          <label htmlFor="full_name">Name</label>
          <input 
            type="text" 
            id="full_name"
            name="full_name"
            placeholder="Enter name"
            onChange={event => {
              const { value } = event.target;
              setName(value);
          }}
          />
        </div>
        <div className="flex">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            name="username"
            placeholder="Enter Username"
            onChange={event => {
              const { value } = event.target;
              setUsername(value);
          }}
          />
        </div>
        <div className="flex">
          <label htmlFor="pwd">Password</label>
          <input 
            type="password" 
            id="pwd" 
            name="pwd"
            placeholder="Enter Password"
            onChange={event => {
              const { value } = event.target;
              setPassword(value);
          }}
            />
        </div>
        <div className="flex">
          <label htmlFor="media">Upload Profile Picture</label>
          <input 
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

export default SignUp;
