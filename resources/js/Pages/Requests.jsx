import React, { useState } from "react";
import SiteLayout from "../Shared/SiteLayout";
import { Table, Space, Button, Modal, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
    },
    {
        title: "Receipient",
        dataIndex: "receipient",
        key: "receipient",
    },
    {
        title: "Approval Count",
        dataIndex: "approval",
        key: "approval",
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary">Approve</Button>
                <Button type="secondary">Finalize</Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        id: "1",
        description: 32,
        amount: "0.002",
        receipient: "0xaa1D600BC39Dfa58534f2B7bfAf4bE3c668f48F8",
        approval: "1/2",
    },
];
const Requests = () => {
    const [modalState, setModalState] = useState(false);
    return (
        <>
            <div className="container section">
                <div className="d-flex justify-content-end mb-2">
                    <button
                        className="btn btn-success"
                        onClick={() => setModalState(true)}
                    >
                        Add Request
                    </button>
                </div>
                <div className="table-responsive">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
            <Modal
                title="Create Request"
                centered
                visible={modalState}
                footer={""}
                onOk={() => setModalState(false)}
                onCancel={() => setModalState(false)}
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    size="large"
                    layout="vertical"
                >
                    <Form.Item
                        name="address"
                        label="Receipient ETH Address"
                        rules={[
                            {
                                required: true,
                                message: "Enter Receipient Address!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Address"
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

Requests.layout = (page) => <SiteLayout children={page} />;
export default Requests;
