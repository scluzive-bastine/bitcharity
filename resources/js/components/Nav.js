import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { MdOutlineCampaign } from "react-icons/md";
import { Link } from "@inertiajs/inertia-react";

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
                <Menu.Item
                    key="campaigns"
                    icon={<MdOutlineCampaign style={{ fontSize: "20px" }} />}
                >
                    <Link href="/campaigns"> Open Campaigns</Link>
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
