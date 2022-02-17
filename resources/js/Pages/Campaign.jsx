import React from "react";
import SiteLayout from "../Shared/SiteLayout";
import { Row, Col, Image, Avatar, Button, Progress } from "antd";
import { UserOutlined, EyeOutlined } from "@ant-design/icons";
import { SiEthereum } from "react-icons/si";
import { MdOutlineRequestPage } from "react-icons/md";
import { Link } from "@inertiajs/inertia-react";

const styles = {
    svCnt: {
        backgroundColor: "#9f56a729",
    },
    svCntReq: {
        backgroundColor: "#94d0cc29",
    },
    svETH: {
        color: "#a763ae",
    },
    svReq: {
        color: "#94d0cc",
    },
};
const Campaign = () => {
    return (
        <>
            <div className="container section pt-5">
                <h1 className="mb-4">
                    Numa Darae is organizing this fundraiser on behalf of
                    Foumata Scou Drmeh.
                </h1>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={25} md={24} lg={16}>
                        <div className="cmpImgHolder">
                            <Image
                                className="img-fluid"
                                src="/images/bitcampbg.jpg"
                                fallback="data:image/png;base64,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"
                                preview={false}
                            />
                        </div>
                        <div className="cmpCnt mt-4">
                            <div className="d-sm-block d-md-flex align-items-center">
                                <Avatar
                                    size={40}
                                    style={styles.svCntReq}
                                    icon={<UserOutlined style={styles.svReq} />}
                                    className="d-flex align-items-center justify-content-center"
                                />
                                <div className="text-wrap ps-sm-3">
                                    <h4 className="mb-0">
                                        Numa Darae is organizing this fundraiser
                                        on behalf of Foumata Scou Drmeh.
                                    </h4>
                                </div>
                            </div>
                            <div className="cmpDesc mt-4">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Itaque, dolorem iure.
                                    Omnis porro molestiae delectus natus! In ab
                                    doloremque, nostrum dignissimos obcaecati
                                    voluptatem aliquam itaque, officia facilis
                                    deserunt quisquam ratione!
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={25} md={24} lg={8}>
                        <div className="cmpDntCnt">
                            <div className="prg mb-4">
                                <h4 className="mb-1">
                                    $123,000 <small>raised of $158,000</small>{" "}
                                </h4>
                                <Progress
                                    strokeColor={{
                                        "0%": "#108ee9",
                                        "100%": "#87d068",
                                    }}
                                    percent={92.9}
                                    size="small"
                                />
                                <small>1.5k Contributions</small>
                            </div>
                            <input
                                type="text"
                                className="form-control form-control-lg rounded-pill"
                            />
                            <div className="d-sm-block d-md-flex mt-3">
                                <Button
                                    type="primary"
                                    shape="round"
                                    size="large"
                                >
                                    Contribute Now
                                </Button>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <Avatar
                                    size={40}
                                    style={styles.svCntReq}
                                    icon={<UserOutlined style={styles.svReq} />}
                                    className="d-flex align-items-center justify-content-center"
                                />
                                <div className="text-wrap ps-2">
                                    <h5 className="mb-0">1,802 contributors</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="cmpDntReq mt-4">
                                <div className="d-sm-block d-md-flex align-items-center mt-4">
                                    <Avatar
                                        size={40}
                                        style={styles.svCnt}
                                        icon={
                                            <SiEthereum style={styles.svETH} />
                                        }
                                        className="d-flex align-items-center justify-content-center"
                                    />
                                    <div className="text-wrap ps-sm-2">
                                        <h5 className="mb-0">200 WEI</h5>
                                        <small>
                                            You must contribute at least 200 to
                                            participate in this campaign
                                        </small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-sm-block d-md-flex align-items-center mt-4">
                                    <Avatar
                                        size={40}
                                        style={styles.svCntReq}
                                        icon={
                                            <MdOutlineRequestPage
                                                style={styles.svReq}
                                            />
                                        }
                                        className="d-flex align-items-center justify-content-center"
                                    />
                                    <div className="text-wrap ps-sm-2">
                                        <h5 className="mb-0">
                                            Number of Requests
                                        </h5>
                                        <small>
                                            A request tries to withdraw money
                                            from the contract.
                                        </small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-sm-block d-md-flex align-items-center mt-4">
                                    <Avatar
                                        size={40}
                                        style={styles.svCnt}
                                        icon={
                                            <SiEthereum style={styles.svETH} />
                                        }
                                        className="d-flex align-items-center justify-content-center"
                                    />
                                    <div className="text-wrap ps-sm-2">
                                        <h5 className="mb-0">0.002</h5>
                                        <small>
                                            The balance is how much money this
                                            contract has left to spend
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <Link href="/requests">
                                <button className="btn btn-outline-secondary mt-4 w-100 d-flex align-items-center justify-content-center">
                                    <EyeOutlined />
                                    <span className="ms-2">View Requests</span>
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

Campaign.layout = (page) => <SiteLayout children={page} />;

export default Campaign;
