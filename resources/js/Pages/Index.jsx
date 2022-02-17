import React from "react";
import SiteLayout from "../Shared/SiteLayout";
import { Row, Col, Button, Progress } from "antd";
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
const Index = () => {
    return (
        <>
            <div className="hero container section">
                <div className="sh1"></div>
                <div className="sh2"></div>
                <Row gutter={[16, 16]} style={styles.rw}>
                    <Col
                        xs={24}
                        sm={24}
                        md={14}
                        lg={12}
                        className="d-flex align-items-center"
                    >
                        <div className="hero-content">
                            <span className="sml">We Believe that</span>
                            <h1>Do Good For Others And Change Lives</h1>
                            <p>
                                Doing good for others creates a harmonous life,
                                every little donation to help millions of people
                            </p>
                            <Button
                                type="primary"
                                size="large"
                                shape="round"
                                className="mt-4"
                            >
                                Donate Now!
                            </Button>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={12}>
                        <div className="d-flex justify-content-center">
                            <img
                                src="/images/hgimg.png"
                                className="img-fluid"
                                alt=""
                                style={styles.heImg}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="abtfoundation container section">
                <div className="abtf1"></div>
                <div className="abtf2"></div>
                <Row gutter={[16, 16]} style={styles.rw}>
                    <Col xs={24} sm={24} md={10} lg={8}></Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={14}
                        lg={16}
                        className="d-flex align-items-center"
                    >
                        <div className="hero-content">
                            <span className="sml">About the foundation</span>
                            <h1>Who we are What we have done with your help</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="stsSecCnt">
                    <Row gutter={[40, 24]} style={styles.rw}>
                        <Col xs={24} sm={24} md={12} lg={6}>
                            <div className="stscnt">
                                <div className="stsimg">
                                    <img src="/images/stsimg.svg" alt="" />
                                </div>
                                <div className="stscntnt">
                                    <h1 className="mb-2">312,812</h1>
                                    <span>Total campaigns completed </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6}>
                            <div className="stscnt">
                                <div className="stsimg">
                                    <img src="/images/stsimg2.svg" alt="" />
                                </div>
                                <div className="stscntnt">
                                    <h1 className="mb-2">$12,516,81</h1>
                                    <span>Donations collected </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6}>
                            <div className="stscnt">
                                <div className="stsimg">
                                    <img src="/images/stsimg3.svg" alt="" />
                                </div>
                                <div className="stscntnt">
                                    <h1 className="mb-2">500</h1>
                                    <span>Open campaigns</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6}>
                            <div className="stscnt">
                                <div className="stsimg">
                                    <img src="/images/stsimg4.svg" alt="" />
                                </div>
                                <div className="stscntnt">
                                    <h1 className="mb-2">872,541</h1>
                                    <span>Connected users</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="hero container section mt-5">
                <span className="sml">Need your help</span>
                <h1>Open Campaings </h1>
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

Index.layout = (page) => <SiteLayout children={page} />;

export default Index;
