import { Link } from 'react-router-dom';

import imgs from '~/assets/imgs/logos/logo.png';

import classNames from 'classnames/bind';
import style from './Logo.module.scss';

const cx = classNames.bind(style);

function LogoHeader() {
    return (
        <Link to="/">
            <div className={cx('logo')}>
                <img src={imgs} alt="CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ" />
            </div>
        </Link>
    );
}

export default LogoHeader;