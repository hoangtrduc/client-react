import classNames from "classnames/bind";
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);


function Wrapper({ children }) {
    return <div className={cx('wrapper shadow-lg w-full bg-white rounded-lg ')}>
        {children}
    </div>;
}

export default Wrapper;