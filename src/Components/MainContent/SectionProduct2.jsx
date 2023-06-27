import { Col, Row } from 'antd'
import './sectionProduct2.scss'
const SectionProduct2 = () => {
    return (
        <div className="product-about">
            <Row gutter={12}>
                <Col span={12}>
                    <div className="about-image">
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-display-of-all-kinds-of-bread-in-a-bakery-image_2546275.png" alt="" />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="about-image">
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-bakery-has-large-displays-of-bagels-image_2511778.png" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default SectionProduct2