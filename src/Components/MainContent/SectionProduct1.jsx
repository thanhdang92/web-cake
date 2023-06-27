import { Col, Row } from 'antd'
import './sectionProduct1.scss'
const SectionProduct1 = () => {
    return (
        <div className="product-featured">
            <div className="product-list">
                <Row>
                    <Col span={8}>
                        <div className="product-item">
                            <a href="">
                                <div className="item-image">
                                    <img src="https://hinhanh.webvua.com/images/item_category/4807/resize/4200400006300.jpg" alt="" />
                                </div>
                                <div className="item-content">BÁNH MÌ</div>
                            </a>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="product-item">
                            <a href="">
                                <div className="item-image">
                                    <img src="https://hinhanh.webvua.com/images/item_category/4807/resize/6004412000315.jpg" alt="" />
                                </div>
                                <div className="item-content">BÁNH NGỌT</div>
                            </a>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="product-item">
                            <a href="">
                                <div className="item-image">
                                    <img src="https://hinhanh.webvua.com/images/item_category/4807/resize/3002638808006.jpg" alt="" />
                                </div>
                                <div className="item-content">BỮA SÁNG</div>
                            </a>
                        </div>
                    </Col>

                </Row>



            </div>
        </div>
    )
}
export default SectionProduct1