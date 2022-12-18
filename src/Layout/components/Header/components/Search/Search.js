import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { BsSearch } from 'react-icons/bs';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Wrapper';
import SearchItem from '~/components/SearchItem';
import { useDebounce } from '~/hooks';

import axiosClient from '~/libraries/axiosClient';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const debounced = useDebounce(searchValue, 500);


    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        axiosClient.get('/products/')
            .then((res) => {
                setSearchResult(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [debounced])

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            SetSearchValue(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                        <Wrapper >
                            {searchResult.map((products) => (
                                <SearchItem key={products.id} data={products} />
                            ))}
                            <h4 className={cx('px-5 text-teal-600 py-3 cursor-pointer')}>
                                hiển thị kết quả
                            </h4>
                        </Wrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <div className={cx('flex')}>
                        <input
                            value={searchValue}
                            className={cx('search-inp')}
                            type="text" placeholder='Hôm nay bạn cần tìm gì?' spellCheck={false}
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                        />
                        <Button className={cx('search-btn')} >
                            <BsSearch className={cx('bs')} />
                        </Button>
                    </div>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;