import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

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
    </div>
  )
};

export default AppLayout;