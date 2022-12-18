import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import styles from './sliderimage.module.scss';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function ProductSlider(props) {

    const [activeThumb, setActiveThumb] = useState(null);



    return <>
        <Swiper

            loop={true}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            className={cx('product-images-slider')}
        >
            {props.images.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link to={item.to}>
                        <img src={item.img} alt="Slider images" />
                    </Link>
                </SwiperSlide>
            ))

            }
        </Swiper>

        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className={cx('product-images-slider-thumbs')}
        >
            {props.images.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className={cx('product-images-slider-thumbs-wrapper')}>
                        <Link to={item.to}>
                            <Button slider >{item.name}</Button>
                        </Link>
                    </div>
                </SwiperSlide>
            ))

            }
        </Swiper>
    </>

}

ProductSlider.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ProductSlider;