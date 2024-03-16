'use client';
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, Menu, ConfigProvider, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const inter = Inter({ subsets: ["latin"] });
const { Header, Content, Footer, Sider } = Layout;

const sideNavItems = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const topNavItems = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-base">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
            }}
          >
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideNavItems} />
              </Sider>
              <Layout>
                <Header>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={topNavItems}
                    style={{ flex: 1, minWidth: 0 }}
                  />
                </Header>
                <Content>{children}</Content>
                <Footer>Footer</Footer>
              </Layout>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
