import classNames from 'classnames/bind';
import style from './Header.module.scss';

import TopNav from './components/TopNav/TopNav';

import Logo from '~/components/Logo/Logo';
import Search from './components/Search/Search';
import Order from './components/Order/Order';
import HeaderMenu from './components/Menu/HeaderMenu';

const cx = classNames.bind(style);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('top-nav')}>
            <TopNav />
        </div>
        <div className={cx('heading h-36 container p-6 flex items-center justify-between')}>
            <div className={cx('pr-2 md:flex')}><Logo /></div>
            <div className={cx('pr-2 md:max-lg:w-full')}><Search /></div>
            <div className={cx('order flex')}>
                <Order />
            </div>
        </div>
        <div className={cx('header-menu')}>
            <HeaderMenu />
        </div>
    </header>;
}

export default Header;