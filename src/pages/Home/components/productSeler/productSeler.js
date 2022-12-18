import React from "react";
import { Link } from "react-router-dom";
import { menuSeler } from "~/assets/imgs/seler";

import classNames from "classnames/bind";
import styles from './Seler.module.scss';

const cx = classNames.bind(styles);

function MenuSeler() {
    return (
        <div className={cx('flex')}>
            {menuSeler.map((item) => (
                <div key={item.id} className={cx('all')}>
                    <Link  >
                        <img src={item.image} alt={item.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MenuSeler;