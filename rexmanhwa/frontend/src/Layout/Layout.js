import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import SearchComponent from "../comp/searchComponent";
import BreadCrumb from "../comp/BreadCrumb/pages/BreadCrumb";
import { Box } from "@mui/material";
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const BodyLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4px",
        }}
      >
        <div className="overflow-hidden rounded-full size-10 shrink-0">
          <img src="/assets/images/logo.jpg" />
        </div>

        <SearchComponent />
      </Header>
      <Content className="lg:p-8">
        <BreadCrumb />
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="lg:p-4"
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Rex Manhwa ©{new Date().getFullYear()} Created by Rex Industry
      </Footer>
    </Layout>
  );
};
export default BodyLayout;
