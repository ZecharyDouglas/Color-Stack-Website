import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import MyNavBar from "/components/MyNavBar.jsx"
import {Outlet} from "react-router-dom"

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    flexShrink: 0,
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    height: 64, // Set the height for footer
    lineHeight: '64px',
    flexShrink: 0,
  };

export default function NavBarLayout(){




    return(<>
        <Header style={headerStyle}><MyNavBar/></Header>
        <Outlet/>
        <Footer style={footerStyle}>Footer</Footer>
        </>
    )
}