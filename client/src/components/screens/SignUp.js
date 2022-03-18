import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image } from 'antd';
import { Button, Tooltip, Statistic, Input, Upload } from 'antd';
import { UserOutlined, HeartOutlined, UploadOutlined } from '@ant-design/icons';


const SignUp = () => {

  const [username, setUsername] = useState();
  const [media, setMedia] = useState();
  const [error, setError] = useState();
  const [post, setPost] = useState();
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
      .then((res) => {
        setPost(res);

      })
      .catch(error => {
        setError(error);

      });
    navigate("/Home");
  }
  
  if (error) return `Error: Username taken already!`;

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

    </div>
  );
}

export default SignUp;
