import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from './Menu.module.scss';
import { menu } from "./IconMenu";

const cx = classNames.bind(style);


function HeaderMenu() {
    return (<div className={cx('container')}>
        <div className={cx(' bg-emerald-800 rounded-lg')}>
            <ul className={cx('menu-ul')}>
                {menu.map((item) => (
                    <li key={item.id} className={cx(' mx-4 my-2 group')}>
                        <Link className={cx('list-menu')} to={item.href}>
                            <span className={cx('flex items-center justify-center text-white text-5xl')}>{item.icon}</span>
                            <span className={cx(' text-xl text-white ')}>{item.name}</span>
                        </Link>

                        {
                            item.submenu && (
                                <div className={cx(" group-hover:md:block hover:md:block hidden ")}>
                                    <div className="py-1">
                                        <div className="w-full h-4 left-0 absolute mt-1 bg-transparent"></div>
                                    </div>
                                    <div className={cx("z-50 w-full bg-white rounded-xl shadow-md shadow-gray-300 absolute top-28 left-0 container ")}>
                                        <div className={cx("flex items-end")}>
                                            {
                                                item.sublinks.map((mysublinks) => (
                                                    <div className={cx(" pb-6 w-72 pl-3 ")}>
                                                        <h4 className={cx("uppercase font-semibold flex justify-start")}><a href={mysublinks.href}>{mysublinks.head}</a></h4>
                                                        <ul className={cx("pt-3")}>
                                                            {mysublinks.sublink.map((slink) => (
                                                                <li key={slink.id} className={cx("text-xl hover:text-emerald-500 flex justify-start py-1")}>
                                                                    <Link href={slink.href} className={cx("text-xl hover:text-emerald-500")}>
                                                                        {slink.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                    </li>
                ))}
            </ul>
        </div>
    </div>);
}

export default HeaderMenu;