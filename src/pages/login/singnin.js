import React from "react";
import classNames from "classnames/bind";
import styles from "./Singnin.module.scss";
import image from "~/assets/imgs/singnin/loginbg.png";

const cx = classNames.bind(styles);

function SingninFrom() {
    return (
        <div className={cx("flex mt-10 rounded-xl bg-slate-100")}>
            <div className={cx(' bg-red-100 rounded-tl-xl rounded-bl-xl p-[40px] flex justify-center flex-col')}>
                <img src={image} alt="singnin" />
            </div>
            <div className={cx('flex flex-1 px-[120px] py-6')}>
                <h1 className={cx(' font-extrabold text-4xl')}>Đăng nhập</h1>
            </div>
        </div>
    );
}

export default SingninFrom;