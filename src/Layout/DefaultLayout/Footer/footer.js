import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import logoVisa from "~/assets/imgs/logos/logo-visa.png";
import logoMaster from "~/assets/imgs/logos/logo-master.png";

import { MapFooter } from "./MapFooter";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('mt-8 bg-green-900  w-full px-5 py-3 rounded-2xl mb-5')}>
                <div className={cx(' flex justify-between pb-20')}>
                    {MapFooter.map((item) => (
                        <div key={item.id} className={cx(' text-white')}>
                            <h4 className={cx(' text-[1.6rem] font-bold')}>{item.head}</h4>
                            {item.subLink.map((sublink) => (
                                <Link key={sublink.id}>
                                    <ul>
                                        <li className={cx(' text-xl')}>{sublink.name}</li>
                                    </ul>
                                </Link>
                            ))}
                        </div>
                    ))}
                    <div className={cx(' text-white')}>
                        <h4 className={cx('text-[1.6rem] font-bold')}>Thanh toán miễn phí</h4>
                        <div className={cx('flex pt-3')}>
                            <a href="/" className={cx('pr-2')}>
                                <img src={logoVisa} alt="" />
                            </a>
                            <a href="/">
                                <img src={logoMaster} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx(' mt-20 text-center text-white ')}>
                    <p className={cx('text-xl')}>© 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:  0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay đổi ngày 24/11/2022)</p>
                    <p className={cx(' text-2xl py-5')}>
                        <strong>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</strong>
                    </p>
                    <p className={cx('text-xl')} >Địa chỉ: 89 Tam Trinh, P. Mai Động, Q. Hoàng Mai, Thành phố Hà Nội. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: <strong>Hoàng Ngọc Chiến</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;