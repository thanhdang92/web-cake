import { Carousel } from 'antd';
import './header.scss'
const SliderShow = () => {
    return (
        <div className="slide-show">
            <Carousel autoplay effect="scrollx">
                <div>
                    <img style={{ width: "100%" }} src="https://hinhanh.webvua.com/images/slider/4807/resize/2101020623102.jpg" alt="" />
                </div>
                <div>
                    <img style={{ width: "100%" }} src="https://hinhanh.webvua.com/images/slider/4807/resize/0262030032208.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}
export default SliderShow