"use client";
import { React, useState } from "react";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  HomeOutlined,
  UserSwitchOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, ConfigProvider, theme, Flex } from "antd";
import Link from "next/link";
import { XPContext } from "./contexts/XPContext";
import XPProgressBar from "./components/XPProgressBar/XPProgressBar";

const { Content, Footer, Sider } = Layout;

const sideNavItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: "2",
    icon: <RadarChartOutlined />,
    label: <Link href="/onboarding/fitness-test">Fitness Test</Link>,
  },
  {
    key: "3",
    icon: <UserSwitchOutlined />,
    label: <Link href="/onboarding/class-selection">Change Class</Link>,
  },
];

export default function RootLayout({ children }) {
  const [ xpValue, setXPValue ]         = useState(0);
  const [ xpThreshold, setXPThreshold ] = useState(100);
  const [ xpLevel, setXPLevel ]         = useState(1);

  const XP = {xpValue, setXPValue,
              xpThreshold, setXPThreshold,
              xpLevel, setXPLevel};

  return (
    <html lang="en">
      <title>Dungeon Fit</title>
      <body className="bg-gray-800 text-base">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
            }}
          >
            <XPContext.Provider value={XP}>
              <Layout>
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                >
                  <div className="demo-logo-vertical" />
                  <XPProgressBar />
                  <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={sideNavItems}
                  />
                </Sider>
                <Layout>
                  <Content>{children}</Content>
                  <Footer>Dungeon Fitness / {new Date().getFullYear()} / <Link href="https://github.com/bblldave/dungeon-fit">GitHub</Link></Footer>
                </Layout>
              </Layout>
            </XPContext.Provider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
