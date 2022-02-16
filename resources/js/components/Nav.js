import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const Nav = () => {
    const [active, setActive] = useState("mail");

    const handleClick = (e) => {
        setActive(e.key);
    };
    return (
        <>
            <div className="logo"></div>
            <Menu
                onClick={handleClick}
                selectedKeys={active}
                mode="horizontal"
                className="rightMenu"
            >
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="howItWorks">How it works</Menu.Item>
                <Menu.Item key="connectWallet">
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        style={{ float: "right" }}
                    >
                        Connect Wallet
                    </Button>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default Nav;
