import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image } from 'antd';
import { Button, Tooltip, Statistic, Input, Layout } from 'antd';
import { UserOutlined, HeartOutlined, LikeOutlined } from '@ant-design/icons';


// Functional Component
const Home = () => {
  return(
    <div>
      <Col span={12} offset={6}>
            <Card>
                <Space direction='vertical'>

                    <Space direction='horizontal' align='start'>
                        <Avatar size='large' icon={<UserOutlined />} />
                        <Typography.Title level={3}>Username</Typography.Title>
                    </Space>

                    <Image 
                    className='post_image'
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    width={900}
                    height={700}
                    align="center"
                    />

                    <Space direction='horizontal'>
                        <Tooltip title='Like Photo'>
                            <Button shape='circle' size='large' icon={<HeartOutlined />} />
                        </Tooltip>
                        <Statistic title='Likes' value={6}></Statistic>
                    </Space>

                    <Space direction='horizontal' className='caption'>
                        <Typography.Paragraph strong='true'>Username: </Typography.Paragraph>
                        <Typography.Paragraph>This is me drinking coffee.</Typography.Paragraph>
                    </Space>

                    <Card className='comments' title='Comments'>

                    </Card>




                </Space>
            </Card>
        </Col>
    </div>



  )


}
export default Home;
