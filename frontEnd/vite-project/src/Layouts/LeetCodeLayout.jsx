import React from "react";
import { Flex, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { Outlet } from "react-router-dom";
import MyNavBar from "/components/MyNavBar.jsx";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 200px)", // Adjust based on the total header and footer height
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
  height: 64, // Set the height for footer
  lineHeight: "64px",
};

export default function LeetCodeLayout() {
  return (
    <>
      <Layout style={{ flex: 1, overflow: "hidden" }}>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
      <Outlet />
    </>
  );
}
