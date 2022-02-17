import React from "react";
import SiteLayout from "../Shared/SiteLayout";
import { Form, Input, Button, Upload } from "antd";
import {
    UserOutlined,
    LockOutlined,
    UploadOutlined,
    InboxOutlined,
} from "@ant-design/icons";

const CreateCampaign = () => {
    const normFile = (e) => {
        console.log("Upload event:", e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    return (
        <>
            <div className="container section">
                <h1>Create Campaign</h1>
                <div className="frmCnt">
                    <Form
                        name="normal_login"
                        className="login-form"
                        size="large"
                        layout="vertical"
                    >
                        <Form.Item
                            name="Title"
                            label="Title of the campaign"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter Title!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Title"
                            />
                        </Form.Item>
                        <Form.Item
                            name="value"
                            label="ETH Value"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter Value!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="text"
                                placeholder="0.2"
                            />
                        </Form.Item>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter Description!",
                                },
                            ]}
                        >
                            <Input.TextArea placeholder="Description" />
                        </Form.Item>
                        <Form.Item
                            name="upload"
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="select file"
                        >
                            <Upload
                                name="logo"
                                action="/upload.do"
                                listType="picture"
                            >
                                <Button icon={<UploadOutlined />}>
                                    Click to upload
                                </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};
CreateCampaign.layout = (page) => <SiteLayout children={page} />;
export default CreateCampaign;
