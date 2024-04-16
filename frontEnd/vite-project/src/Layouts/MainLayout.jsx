import React from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 200px)', // Adjust based on the total header and footer height
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    height: 64, // Set the height for footer
    lineHeight: '64px',
  };


export default function MainLayout(){




    return(
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}> {/* Ensures full viewport height and width */}
        <Layout style={{ flex: 1, overflow: 'hidden' }}> {/* Removes specific width restrictions and allows full expansion */}
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </div>
    )
}