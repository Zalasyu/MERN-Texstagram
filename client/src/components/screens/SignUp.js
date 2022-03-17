import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image } from 'antd';
import { Button, Tooltip, Statistic, Input, Upload } from 'antd';
import { UserOutlined, HeartOutlined, UploadOutlined } from '@ant-design/icons';


const SignUp = () => {

  const [username, setUsername] = useState();
  const [media, setMedia] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate;

  const send = event =>{
    const data = new FormData();
    data.append("name", name);
    data.append("username", username);
    
    data.append("password", password);
    data.append("file", media);

    axios.post("http://localhost:8000/signup", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigate("/Home");

  };
  return(
    <div className = "registration">
      <Row gutter={[32, 32]} className='newPost'>
        <Col span={12} offset={6}>
          <div className='card_container'><div className='card login_card'><h2>Texstagram</h2></div></div>

          <Card >
            <Typography.Title level={3}>Create New Profile</Typography.Title>
            <Input
            size='large'
            placeholder='Enter Username'
            onChange={event => {
              const { value } = event.target;
              setUsername(value);
          }}
            ></Input>
            <Input
            size='large'
            placeholder='Enter Password'
            onChange={event => {
              const { value } = event.target;
              setPassword(value);
          }}
            ></Input>
            <Input
            size='large'
            placeholder='Enter Full Name'
            onChange={event => {
              const { value } = event.target;
              setName(value);
          }}
            ></Input>
            <label htmlFor="media">Upload Profile Picture: </label>
            <input
              className='create_button'
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
            <Row align='vertical' className='create_button'>
              <div></div>

              
              <Button onClick={send}>Create Profile</Button>
            </Row>
            
          </Card>
        </Col>

      </Row>

      <h1>Register</h1>
      
      <form action="#">
        <div className="flex">
          <label htmlFor="full_name">Name</label>
          <input 
            required 
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
            required
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
            required
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

export default SignUp;
