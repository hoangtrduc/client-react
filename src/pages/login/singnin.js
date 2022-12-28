import React from "react";
import classNames from "classnames/bind";
import styles from "./Singnin.module.scss";
import image from "~/assets/imgs/singnin/loginbg.png";
import fb from "~/assets/imgs/singnin/fb.png";
import gg from "~/assets/imgs/singnin/gg.png";

const cx = classNames.bind(styles);

function SingninFrom() {
    return (
        <div className={cx("flex mt-10 rounded-xl bg-slate-100")}>
            <div className={cx(' bg-red-100 rounded-tl-xl rounded-bl-xl p-[40px] flex justify-center flex-col')}>
                <img src={image} alt="singnin" />
            </div>
            <div className={cx('flex flex-1 flex-col px-[120px] py-6')}>
                <div><h1 className={cx(' font-extrabold text-4xl')}>Đăng nhập</h1></div>
                <div className={cx('flex w-full')}>
                    <img onClick={() => { alert("hiện chưa có chức năng này!") }} className={cx('w-1/2 cursor-pointer pr-3')} src={fb} alt="facebook" />
                    <img onClick={() => { alert("hiện chưa có chức năng này!") }} className={cx('w-1/2 cursor-pointer ')} src={gg} alt="google" />
                </div>
                <div className={cx(' mt-[10px] mb-5 border-b-2 border-gray-400 h-[23px] flex relative justify-center')}>
                    <p className={cx('absolute bg-slate-100 text-gray-400 px-3 pt-3')}>Hoặc</p>
                </div>
            </div>
        </div>
    );
}

export default SingninFrom;