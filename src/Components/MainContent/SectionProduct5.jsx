import { Col, Row } from 'antd'
import './sectionProduct3.scss'
const SectionProduct5 = () => {
    return (
        <div className="product">
            <div className="container">
                <Row>
                    <Col span={24}>
                        <div className="title">
                            <h3>BỮA SÁNG</h3>
                        </div>
                        <div className="product-container">
                            <Row gutter={16} className="product-list" justify="center">
                                <Col span={4} className="product-item">
                                    <div className="product-image">
                                        <a href="/product-item">
                                            <img src="https://hinhanh.webvua.com/images/item/4807/resize/3225226156152.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title">
                                            <a href="/banh-gao">
                                                Sandwich
                                            </a>
                                        </div>
                                        <div className="product-price">
                                            <a href="/lien-he">
                                                35,000₫
                                            </a>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionProduct5