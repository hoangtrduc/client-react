import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
    return (
        <Link to={`${data.name}`} className={cx(' ')}>
            <div className={cx(' flex cursor-pointer border-b border-slate-300 px-4 pt-4 pb-4 content-center search-item')}>
                <div className={cx(' w-[50px]  mr-3')}>
                    <img src={`http://localhost:9000/${data.imageUrl}`} alt={data.name} />
                </div>
                <div className={cx(' text-2xl ')}>
                    <h3 className={cx(' font-bold  ')}><a href="/">{data.name}</a></h3>
                    <h3 className={cx(' pt-2 text-red-500')}>
                        {data.price} đ
                    </h3>
                </div>
            </div>
        </Link>
    );
}

SearchItem.prototype = {
    data: PropTypes.object,
}

export default SearchItem;