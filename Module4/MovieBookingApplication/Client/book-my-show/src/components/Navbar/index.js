import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const {Header} = Layout;

const items = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'User',
    key: 'user'
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Layout>

    <Header style={{display:'flex', alignItems:'center'}} >

        <h3 className='text-white fs-18'> Book My Show</h3>

        <Menu theme='dark' className='text-white' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

    </Header>


  </Layout>
  

    
    ;
};
export default Navbar;