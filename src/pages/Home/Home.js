import classNames from "classnames/bind";
import styles from './Home.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import ProductSlider from "~/components/Slider/Slider";
import MenuSeler from "./components/productSeler/productSeler";

import { sliderImage } from "~/assets";

const cx = classNames.bind(styles)

function Home() {
    return <>
        <div className={cx('home')}>
            <div className={cx(' my-5 flex items-center justify-center rounded-xl')}>
                <div className={cx(' w-full h-[434px] rounded-xl')}>
                    <ProductSlider images={sliderImage} />
                </div>
            </div>
            <div className={cx('w-full')}>
                <MenuSeler />
            </div>
        </div>
    </>;
}

export default Home;