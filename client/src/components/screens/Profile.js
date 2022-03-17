import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import Axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image, List } from 'antd';
import { Button, Tooltip, Statistic, Input, Descriptions } from 'antd';
import { UserOutlined, HeartOutlined, LikeOutlined, SettingOutlined } from '@ant-design/icons';


const Profile = () => {
  
  return (
    <>

      <Row className='profile_info'>
          <Col span={12} offset={6}>
            <Card>
              
                  <Card.Grid className="profile_pic_container" style={{width: '33.33%'}}>
                    <Row justify='center'>
                      <Avatar size={150} gap={5} icon={<UserOutlined />} />

                    </Row>
                  </Card.Grid>

                  <Card.Grid style={{width: '66.66%'}}>
                      <ul>
                        <li>
                            <Space align='horizontal'>
                            <Typography.Title level={3}>mcmorriss</Typography.Title>
                            <Button>Edit Profile</Button>
                            <SettingOutlined style={{ fontSize: '25px' }}/>
                      </Space>
                        </li>
                        <li>
                            <div className='profile_stats'>
                              <ul>
                                <li><b>0</b> Posts</li>
                                <li><b>51</b> Followers</li>
                                <li><b>43</b> Following</li>
                              </ul>
                        </div>
                        </li>
                        <li className='bio'>
                          <Typography>
                          <b>Michael Morriss</b>
                          </Typography>
                          <Typography>
                          This is my bio and my name is michael morriss and I go to OSU.
                          </Typography>
                        </li>
                      </ul> 
                  </Card.Grid>  

            </Card>
        </Col>
      </Row>

      <Row gutter={[32, 32]} className='profile_posts' >
        <Col span={6} />
        <Col span={4}>
            <Card
            hoverable 
            style={{width: '100%'}}
            cover={<img src='https://picsum.photos/200' />}
            >
                <Card.Meta title={`Likes: 0`} description={`Comments: 0`} />
            </Card> 
        </Col>
        <Col span={4}>
            <Card 
            hoverable 
            style={{width: '100%'}}
            cover={<img src='https://picsum.photos/200' />}
            >
                <Card.Meta title={`Likes: 0`} description={`Comments: 0`} />
            </Card> 
        </Col>
        <Col span={4}>
            <Card 
            hoverable 
            style={{width: '100%'}}
            cover={<img src='https://picsum.photos/200' />}
            >
                <Card.Meta title={`Likes: 0`} description={`Comments: 0`} />
            </Card> 
        </Col>
        <Col span={6} />
        <Col span={6} />
        <Col span={4}>
            <Card
            hoverable 
            style={{width: '100%'}}
            cover={<img src='https://picsum.photos/200' />}
            >
                <Card.Meta title={`Likes: 0`} description={`Comments: 0`} />
            </Card> 
        </Col>
        <Col span={4}>
            <Card 
            hoverable 
            style={{width: '100%'}}
            cover={<img src='https://picsum.photos/200' />}
            >
                <Card.Meta title={`Likes: 0`} description={`Comments: 0`} />
            </Card> 
        </Col>
        <Col span={4}>
            <Card 
            hoverable 
            style={{width: '100%'}}
            cover={<img src='https://picsum.photos/200' />}
            >
                <Card.Meta title={`Likes: 0`} description={`Comments: 0`} />
            </Card> 
        </Col>
        <Col span={6} />
        
        
        

      </Row>

  


    </>
  )


}
export default Profile;
