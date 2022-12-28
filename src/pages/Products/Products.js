import classNames from "classnames/bind";
import styles from "./Products.module.scss";

import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

import SamProducts from "../Home/components/samProduct/Samproduct";

const cx = classNames.bind(styles);

function Products() {
    return (
        <div>
            <div className={cx('mt-8 border-b-2 border-slate-400 pb-6')}>
                <ul className={cx('flex font-bold items-center ')}>
                    <li className={cx('flex items-center pr-2')}><span><AiOutlineHome /></span> Trang chủ</li>
                    <AiOutlineRight />
                    <li className={cx('text-amber-500')}>Điện thoại</li>
                </ul>
            </div>
            <div className={cx('mt-8')}>
                <h2 className={cx(' text-3xl font-extrabold text-amber-400')}>Điện thoại</h2>
            </div>
            <div className={cx('mt-8 flex flex-wrap ')}>
                <SamProducts />
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
    );
}

export default Products;