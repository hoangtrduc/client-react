import React from "react";
import { RiTruckLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import classNames from "classnames/bind";
import styles from './order.module.scss';
import Button from "~/components/Button/Button";

var cx = classNames.bind(styles);

function Order() {
    return (
        <div className={cx('flex items-center')} >
            <Button primary to="/Cart" >
                <div className={cx('flex items-center ')}>
                    <span className={cx('text-5xl pr-2')}><RiTruckLine /></span>
                    <h2 className={cx(' text-xl')}>kiểm tra đơn hàng</h2>
                </div>
            </Button>
            <div className={cx('Order_cart relative text-green-900 hover:text-green-600 cursor-pointer')}>
                <AiOutlineShoppingCart className={cx('text-8xl font-medium  pl-5 py-2')} />
                <span className={cx('cart text-xl absolute top-7 left-2/3 -translate-x-1/2 text-orange-500 ')}>0</span>
            </div>
        </div>
    );
}

export default Order;