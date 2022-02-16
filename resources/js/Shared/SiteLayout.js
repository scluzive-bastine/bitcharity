import React from "react";
import Nav from "../components/Nav";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const SiteLayout = ({ children }) => {
    return (
        <>
            <Layout className="layout">
                <Header>
                    <Nav />
                </Header>
                <Content className="site-layout-content">{children}</Content>
                <Footer style={{ textAlign: "center" }}>
                    BitCharity ©2021 Created by BitCharity
                </Footer>
            </Layout>
        </>
    );
};

export default SiteLayout;
