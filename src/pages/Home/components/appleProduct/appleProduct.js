import React from "react";
import classNames from "classnames/bind";
import styles from "./AppleProduct.module.scss";
import { Link } from "react-router-dom";

import appleImg from '~/assets/imgs/products/ip14-promax.png';
import logoApple from '~/assets/imgs/logos/apple.png';


const cx = classNames.bind(styles);

function AppleProducts() {
    return (
        <div className={cx('apple_item')}>
            <div className={cx(' pt-[33px]  block h-0 pb-[110%] relative overflow-hidden')}>
                <Link><img className={cx(' w-4/5 h-auto absolute left-1/2 -translate-x-2/4')} src={appleImg} alt="apple" /></Link>
            </div>
            <div className={cx(' absolute top-1 left-2')}>
                <span>
                    <img src={logoApple} alt="Chính hãng Apple" />
                </span>
            </div>
            <div className={cx(' pb-6  px-1')}>
                <Link className={cx('test')}><p className={cx('block font-bold')}>Apple iPhone 11 - 128GB - Chính hãng VN/A</p></Link>
                <span>
                    <strong className={cx('pr-3 text-[#fd475a]')}>12,450,000 đ</strong>
                    <strike>21,990,000 đ</strike>
                </span>
            </div>
        </div>
    );
}

export default AppleProducts;