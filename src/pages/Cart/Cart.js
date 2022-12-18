import classNames from "classnames/bind";
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return <h2 className={cx('h-2')}>CART PAGE</h2>;
}

export default Cart;