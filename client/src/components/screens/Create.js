import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image } from 'antd';
import { Button, Tooltip, Statistic, Input, Layout } from 'antd';
import { UserOutlined, HeartOutlined, LikeOutlined } from '@ant-design/icons';

const Create = () => {

    
  return (
    <div>
        <Row gutter={[32, 32]} className='newPost'>
            <Col span={12} offset={6}>
            <Card>
                <Typography.Title level={3}>Upload New Post</Typography.Title>
                <Input 
                size="large" 
                placeholder="Enter Username"
                
                 />
                <Input 
                size="large" 
                placeholder="Enter Image URL"
                
                 />
                <Input.TextArea 
                size="large" 
                placeholder="Write a Caption (200 remaining)"
                maxLength={200}
                showCount 
                
                />
                <Button type="dashed" >Create Post</Button>
                <Button type="dashed" >Show New Post</Button>
            </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Create