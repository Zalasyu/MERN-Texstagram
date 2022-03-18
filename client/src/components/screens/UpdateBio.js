import { useState } from 'react';
import Axios from 'axios';
import { Card, Space, Typography, Row, Col, Avatar, Image } from 'antd';
import { Button, Tooltip, Statistic, Input, Select } from 'antd';
import { UserOutlined, HeartOutlined, LikeOutlined } from '@ant-design/icons';

import React from 'react'

const UpdateBio = () => {
    const [username, setUsername] = useState("");
    const [newBio, setNewBio] = useState("");

    const updateNewBio = () => {
        Axios.put("http://localhost:8000/bio", {bio: newBio, username: username}).then(
            (response) => {
                alert('Bio successfully updated.');
            })
    };

    
  return (
    <div>
        <Row gutter={[32, 32]} className='newPost'>
        <Col span={12} offset={6}>
            <Card>
                <Typography.Title level={3}>Update Biography</Typography.Title>
                

                <Select
                className='update-field'
                placeholder="Select User"
                allowClear
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
                >
                    <Select.Option value="dyras">Dyras</Select.Option>
                    <Select.Option value="skaterdude">SkaterDude</Select.Option>
                </Select>


                <Input.TextArea
                className='update-field' 
                size="large" 
                placeholder="Write a Biography (200 remaining)"
                maxLength={200}
                showCount 
                />

                <Button type="dashed" onClick={updateNewBio}>Update Bio</Button>

            </Card>
        </Col>
    </Row>
    </div>
  )
}

export default UpdateBio;