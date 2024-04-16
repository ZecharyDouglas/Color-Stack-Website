import React from 'react';
import { Flex, Layout } from 'antd';
import {Outlet} from "react-router-dom"
const { Header, Footer, Sider, Content } = Layout;
import MyNavBar from "/components/MyNavBar.jsx"

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    flexShrink: 0,
  };
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 200px)', // Adjust based on the total header and footer height
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
    flexGrow: 1, /* Allows content to expand and fill available space */
  overflowY: "auto", /* Adds scroll to content if overflow */
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    height: 64, // Set the height for footer
    lineHeight: '64px',
    flexShrink: 0,
  };


export default function MainLayout(){




    return(
        <div style={{ display: 'flex', width: '100%', height: '100vh' }}> {/* Adjusted for full viewport height */}
      <Layout style={{ flex: 1, display: 'flex', flexDirection: 'column' }}> {/* Ensures layout is flex and column direction */}
        <Content style={contentStyle}><Outlet/></Content> {/* Outlet moved inside Content */}
        
      </Layout>
      <Outlet/>
    </div>
    )
}