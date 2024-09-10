/* eslint-disable react/prop-types */
import { ConfigProvider, Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import logo from "../assets/logo.png"
const { Content } = Layout;
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./menu.css"

import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, DownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { items, itemsen, routeMapping } from './items';
import { useDispatch, useSelector } from 'react-redux';
import { LocationOnOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setLangStatus } from '../redux/features/language';

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

function MainLayout({ children }) {




  const { lang } = useSelector(state => state.language)




















  const [stateOpenKeys, setStateOpenKeys] = useState([]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  const navigate = useNavigate();

  const handleClick = (e) => {
    const route = routeMapping[e.key];
    if (route) {
      navigate(route);
    } else {
      console.error(`No route found for key: ${e.key}`);
    }
  };

  const dispatch = useDispatch()

  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout style={{ backgroundColor: "white", }}>
      <div className='px-5' style={{ width: "100%", display: 'flex', alignItems: 'center', height: "110px", justifyContent: "space-between", backgroundColor: "white" }}>
        <div>
          <svg onClick={() => dispatch(setLangStatus("tr"))} className='mx-2' style={{ cursor: "pointer" }} width='30' height='21' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'><stop stopColor='#FFF' offset='0%' /><stop stopColor='#F0F0F0' offset='100%' /></linearGradient><linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='b'><stop stopColor='#E92434' offset='0%' /><stop stopColor='#E11324' offset='100%' /></linearGradient></defs><g fill='none' fillRule='evenodd'><path fill='url(#a)' d='M0 0h21v15H0z' /><path fill='url(#b)' d='M0 0h21v15H0z' /><path d='M13.052 4.737A3.907 3.907 0 0010.75 4C8.679 4 7 5.567 7 7.5S8.679 11 10.75 11c.868 0 1.667-.275 2.302-.737a4.5 4.5 0 110-5.526zm1.214 3.34l-.919 1.113.063-1.442-1.343-.53 1.39-.386.09-1.441.796 1.204 1.398-.361-.898 1.13.775 1.217-1.352-.505z' fill='url(#a)' /></g></svg>
          <svg onClick={() => dispatch(setLangStatus("en"))} style={{ cursor: "pointer" }} width='30' height='21' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'><stop stopColor='#FFF' offset='0%' /><stop stopColor='#F0F0F0' offset='100%' /></linearGradient><linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='b'><stop stopColor='#0A17A7' offset='0%' /><stop stopColor='#030E88' offset='100%' /></linearGradient><linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='c'><stop stopColor='#E6273E' offset='0%' /><stop stopColor='#CF152B' offset='100%' /></linearGradient></defs><g fill='none' fillRule='evenodd'><path fill='url(#a)' d='M0 0h21v15H0z' /><path fill='url(#b)' d='M-.002 0h21v15h-21z' /><path d='M5.003 10H-.002V5h5.005L-2.082.22l1.118-1.657 8.962 6.045V-1h5v5.608l8.962-6.045L23.078.22 15.993 5h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045V16h-5v-5.608l-8.962 6.045-1.118-1.658L5.003 10z' fill='url(#a)' /><path d='M14.136 4.958l9.5-6.25a.25.25 0 00-.275-.417l-9.5 6.25a.25.25 0 10.275.417zm.732 5.522l8.515 5.74a.25.25 0 10.28-.415l-8.516-5.74a.25.25 0 00-.279.415zM6.142 4.526L-2.74-1.461a.25.25 0 00-.28.415L5.863 4.94a.25.25 0 00.279-.414zm.685 5.469l-9.845 6.53a.25.25 0 10.276.416l9.846-6.529a.25.25 0 00-.277-.417z' fill='#DB1F35' fillRule='nonzero' /><path fill='url(#c)' d='M-.002 9h9v6h3V9h9V6h-9V0h-3v6h-9z' /></g></svg>
        </div>

        <img style={{cursor: "pointer"}} onClick={() => navigate("/")} src={logo} alt="" />

        <div className='d-flex flex-column justify-content-center norespo'>
          <span>
            <PhoneIcon></PhoneIcon> 0356 212 00 22
          </span>
          <div onClick={() =>  window.open("https://wa.me/+903562120022", '_blank')} style={{ cursor: "pointer" }}>
            <span style={{color: "green"}}>
              <WhatsAppIcon></WhatsAppIcon> 0356 212 00 22

            </span>

          </div>
        </div>

      </div>
      <hr />
      <div className='w-100 d-flex justify-content-center mb-1 '>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#FEB416', // Primary color
              colorBgContainer: '#FFFFFF', // Background color
              colorTextBase: '#000000', // Text color
              colorTextHeading: '#333333', // Heading text color
              // Menu specific styles
              colorMenuItemHover: '#FEB416', // Hover color
            },
          }}
        >
          {/* <Menu
            onClick={onClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="horizontal"
            items={itemsen}
          /> */}
          <Menu
            onClick={handleClick}
            defaultOpenKeys={['1']}
            mode={"horizontal"}
            onOpenChange={onOpenChange}
            style={{ width: "80%", fontWeight: "bold" }}
            items={lang == "tr" ? items : itemsen}
            overflowedIndicator={<DownOutlined />}
          >
          </Menu>
        </ConfigProvider>
      </div>
      <Content>
        {children}
      </Content>


      <div className='footerrr w-100 d-flex flex-column' >
        {lang == "tr"
          ? <div style={{ color: "white" }} className='fs-5 fw-bold mx-5 mt-5 text-center'>
            İletişim

          </div>
          : <div style={{ color: "white" }} className='fs-5 fw-bold mx-5 mt-5 text-center'>
            Contact

          </div>
        }

        <div className='foott d-flex flex-column mx-5 mb-2'>
          <span style={{ color: "white" }} className='fs-5 '>
            <MailOutlined style={{ fontSize: "25px" }} className='mx-2'></MailOutlined>
            ugurrecepcelik@gmail.com
          </span>
          <span style={{ color: "white" }} className='fs-5 '>
            <PhoneIcon style={{ fontSize: "25px" }} className='mx-2'></PhoneIcon>
            (0356) 212 00 22
          </span>
          <span style={{ color: "white" }} className='fs-5 '>
            <LocationOnOutlined style={{ fontSize: "25px" }} className='mx-2'></LocationOnOutlined>
            Merkez, 1 Yeşilırmak, Bosna 2. Sok No:10, 60030 Tokat Merkez/Tokat
          </span>
        </div>
      </div>

    </Layout>
  );
}


export default MainLayout;