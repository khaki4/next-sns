import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col, Card, Avatar } from 'antd';
import LoginForm from './LoginForm';

const dummy = {
  nickname: 'kevin',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>sns</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>profile</a></Link></Menu.Item>
        <Menu.Item key="email">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
        </Menu.Item>
      </Menu>
      <Button><Link href="/signup"><a>Signup</a></Link></Button>
      {children}
      <Row>
        <Col xs={24} md={6}>
          {
            dummy.isLoggedIn ?
              <Card
                actions={[
                  <div key="twit">Post <br/>{dummy.Post.length}</div>,
                  <div key="twit">Following <br/>{dummy.Followings.length}</div>,
                  <div key="twit">Followers <br/>{dummy.Followers.length}</div>,
                ]}
              >
                <Card.Meta
                  avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                  title={dummy.nickname}
                />
              </Card> :
              <LoginForm/>
          }
        </Col>
      </Row>
    </div>
  )
};

export default AppLayout;