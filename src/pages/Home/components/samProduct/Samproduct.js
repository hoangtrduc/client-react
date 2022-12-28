import React from "react";

import classNames from "classnames/bind";
import styles from './SamProduct.module.scss';
import SamImage from '~/assets/imgs/products/s22.png';

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SamProducts() {
    return (
        <div className={cx('apple_item')}>
            <div className={cx(' pt-[33px] block h-0 pb-[110%] relative overflow-hidden')}>
                <Link><img className={cx(' w-3/5 h-auto absolute  left-1/2 -translate-x-2/4')} src={SamImage} alt="apple" /></Link>
            </div>
            <div className={cx(' pb-6  px-1')}>
                <Link className={cx('test')}><p className={cx('block font-bold')}>Samsung Galaxy S21 FE (5G) - 8GB/128GB - Chính Hãng</p></Link>
                <span>
                    <strong className={cx('pr-3 text-[#fd475a]')}>11,290,000 đ</strong>
                    <strike>16,990,000 đ</strike>
                </span>
            </div>
        </div>
    );
}

export default SamProducts;