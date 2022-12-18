import React from "react";

import style from './TopNav.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const navigation = [
    {
        id: 1,
        name: 'Bản mobile',
        href: '#',
    },
    {
        id: 2,
        name: 'Giới thiệu',
        href: '#',
    },
    {
        id: 3,
        name: 'Sản phẩm đã xem',
        href: '#',
    },
    {
        id: 4,
        name: 'Trung tâm bảo hành',
        href: '#',
    },
    {
        id: 5,
        name: 'Hệ thống 124 siêu thị',
        href: '#',
    },
    {
        id: 6,
        name: 'Tuyển dụng',
        href: '#',
    },
    {
        id: 7,
        name: 'Bản mobile',
        href: '#',
    },
    {
        id: 8,
        name: 'Tra cứu đơn hàng',
        href: '#',
    },
    {
        id: 9,
        name: 'Đăng nhập',
        href: '/singnin',
    },
]

function TopNav() {
    return <div className={cx('container')}>
        <div className={cx('flex space-x-4 justify-end')}>
            {navigation.map((item) => (
                <ul key={item.id} className={cx('p-1')}>
                    <li >
                        <a
                            href={item.href}
                            className={cx(' text-lg text-white hover:text-emerald-500')}
                        >
                            {item.name}
                        </a>
                    </li>
                </ul>
            ))}
        </div>
    </div>;
}

export default TopNav;