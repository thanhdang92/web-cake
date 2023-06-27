import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd';
import SliderShow from './SliderShow';
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Row>
                    <Col span={6} className="content-left">
                        <div className="side-bar">
                            <FontAwesomeIcon icon="fa-solid fa-bars" />
                        </div>
                        <div className="number-phone">
                            <a href="/"><FontAwesomeIcon className="icon" icon="fa-solid fa-phone" />0935161910</a>
                        </div>
                    </Col>
                    <Col span={12} className="logo">
                        <a href="/">
                            <img src="https://hinhanh.webvua.com/images/logo/4807/resize/0173075530402.png" alt="" />
                        </a>
                    </Col>
                    <Col span={6} className="content-right">
                        <div className="icon-search">
                            <a href="/search">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </a>
                        </div>
                        <div className="cart">
                            <a href="/cart">
                                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
            <SliderShow />
        </div>
    )
}

export default Header;