import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image } from 'antd';
import { Button, Tooltip, Statistic, Input, Select } from 'antd';
import { UserOutlined, HeartOutlined, LikeOutlined } from '@ant-design/icons';

const Create = () => {
  const [username, setUsername] = useState();
  const [media, setMedia] = useState();
  const [caption, setCaption] = useState();

  const send = event =>{
    const data = new FormData();

    data.append("owned_by", username);
    data.append("media", media);
    data.append("caption", caption);

    axios.post("http://localhost:8000/create", data)
      .then((response) => {
          alert('Post successfully created.');
      });
  }


  return (
    <div>
        <Row gutter={[32, 32]} className='newPost'>
            <Col span={12} offset={6}>
            <Card>
                <Typography.Title level={3}>Upload New Post</Typography.Title>


                <Typography>Username: </Typography>
                <Select
                style={{width: '150px'}}
                defaultValue='skaterdude'
                size="large"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                >
                  <Select.Option value='dyras'>Dyras</Select.Option>
                  <Select.Option value='skaterdude'>SkaterDude</Select.Option>
                </Select>

                <Typography>Image Url: </Typography>
                <Select
                style={{width: '150px'}}
                size="large"
                onChange={(event) => {
                  setMedia(event.target.value);
                }}
                >
                  <Select.Option value='https://picsum.photos/200/300'>Image1</Select.Option>
                  <Select.Option value='https://picsum.photos/202/303'>Image2</Select.Option>
                </Select>


                <Typography>Select a Caption: </Typography>
                <Select
                style={{width: '150px'}}
                size="large"
                onChange={(event) => {
                  setCaption(event.target.value);
                }}
                >
                  <Select.Option value='https://picsum.photos/200/300'>Caption 1</Select.Option>
                  <Select.Option value='https://picsum.photos/202/303'>Caption 2</Select.Option>
                </Select>
                <Row>
                  <Button type="dashed" onClick={send}>Create Post</Button>
                </Row>


            </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Create;
