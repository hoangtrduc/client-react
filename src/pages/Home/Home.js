import classNames from "classnames/bind";
import styles from './Home.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import ProductSlider from "~/components/Slider/Slider";
import MenuSeler from "./components/productSeler/productSeler";

import { sliderImage } from "~/assets";
import Button from "~/components/Button/Button";
import AppleProducts from "./components/appleProduct/appleProduct";
import SamProducts from "./components/samProduct/Samproduct";

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
            <div className={cx(' mt-7')}>
                <Button apple>
                    <h4 className={cx(' uppercase font-semibold')}><a className={cx('hover:text-green-700')} href="/">Apple authorised Reseller</a></h4>
                </Button>
            </div>
            <div className={cx(' mt-8 flex flex-wrap h-[750px] ')}>
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
                <AppleProducts />
            </div>

            <div className={cx(' my-10')}>
                <Button enabled>
                    <h4 className={cx(' uppercase font-semibold')}><a className={cx('hover:text-green-700')} href="/">Điện thoại nổi bật</a></h4>
                </Button>
            </div>
            <div className={cx(' mt-8 flex flex-wrap')}>
                <div className={cx('mt-8 flex flex-wrap h-[750px] ')}>
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                    <SamProducts />
                </div>
            </div>
        </div>
    </>;
}

export default Home;