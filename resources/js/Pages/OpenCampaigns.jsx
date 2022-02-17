import React from "react";
import SiteLayout from "../Shared/SiteLayout";
import { Button, Row, Col, Progress } from "antd";
import { Link } from "@inertiajs/inertia-react";

const styles = {
    heImg: {
        width: "500px",
    },
    rw: {
        zIndex: "5",
        position: "relative",
    },
};
const OpenCampaigns = () => {
    return (
        <>
            <div
                className="container-fluid section"
                style={{ background: "#70c2b745", paddingBottom: "100px" }}
            >
                <div className="container">
                    <h1>Open Campaigns</h1>
                    <p>
                        Doing good for others creates a harmonous life, every
                        little donation to help millions of people
                    </p>
                    <Button type="primary" size="large" shape="round">
                        <Link href="/create/campaign">Create a campaign</Link>
                    </Button>
                </div>
            </div>
            <div className="container">
                <Row className="mt-5" gutter={[16, 16]} style={styles.rw}>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Link href="/campaign/unique">
                            <div className="glcrdCnt">
                                <div className="header">
                                    <img
                                        src="/images/placeholder.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <h1>Lorem Ipsum is simply dummy text</h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className="glcrCntFt mt-2">
                                <Progress
                                    strokeColor={{
                                        "0%": "#108ee9",
                                        "100%": "#87d068",
                                    }}
                                    percent={99.9}
                                    size="small"
                                />
                                <div className="mt-1 d-flex glcnt">
                                    <div>
                                        <span>Goal</span>
                                        <h6>$180,000</h6>
                                    </div>
                                    <div>
                                        <span>Raised</span>
                                        <h6>$80,000</h6>
                                    </div>
                                    <div>
                                        <span>To Go</span>
                                        <h6>$100,000</h6>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="glcrdCnt">
                            <div className="header">
                                <img
                                    src="/images/placeholder.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h1>Lorem Ipsum is simply dummy text</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className="glcrCntFt mt-2">
                            <Progress
                                strokeColor={{
                                    "0%": "#108ee9",
                                    "100%": "#87d068",
                                }}
                                percent={89.9}
                                size="small"
                            />
                            <div className="mt-1 d-flex glcnt">
                                <div>
                                    <span>Goal</span>
                                    <h6>$180,000</h6>
                                </div>
                                <div>
                                    <span>Raised</span>
                                    <h6>$80,000</h6>
                                </div>
                                <div>
                                    <span>To Go</span>
                                    <h6>$100,000</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="glcrdCnt">
                            <div className="header">
                                <img
                                    src="/images/placeholder.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h1>Lorem Ipsum is simply dummy text</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className="glcrCntFt mt-2">
                            <Progress
                                strokeColor={{
                                    "0%": "#108ee9",
                                    "100%": "#87d068",
                                }}
                                percent={78.9}
                                size="small"
                            />
                            <div className="mt-1 d-flex glcnt">
                                <div>
                                    <span>Goal</span>
                                    <h6>$180,000</h6>
                                </div>
                                <div>
                                    <span>Raised</span>
                                    <h6>$80,000</h6>
                                </div>
                                <div>
                                    <span>To Go</span>
                                    <h6>$100,000</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="glcrdCnt">
                            <div className="header">
                                <img
                                    src="/images/placeholder.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h1>Lorem Ipsum is simply dummy text</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className="glcrCntFt mt-2">
                            <Progress
                                strokeColor={{
                                    "0%": "#108ee9",
                                    "100%": "#87d068",
                                }}
                                percent={40}
                                size="small"
                            />
                            <div className="mt-1 d-flex glcnt">
                                <div>
                                    <span>Goal</span>
                                    <h6>$180,000</h6>
                                </div>
                                <div>
                                    <span>Raised</span>
                                    <h6>$80,000</h6>
                                </div>
                                <div>
                                    <span>To Go</span>
                                    <h6>$100,000</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
OpenCampaigns.layout = (page) => <SiteLayout children={page} />;
export default OpenCampaigns;
