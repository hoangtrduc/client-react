import { useState, useEffect, useRef } from 'react';
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
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return
        }

        axiosClient.get('/products/search/', {
            p: debounced,
        })
            .then((res) => {
                // console.log(res.data)
                setSearchResult(res.data.key)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [debounced])



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
                            {searchResult.map((result) => (
                                <SearchItem key={result._id} data={result} />
                            ))}
                        </Wrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <div className={cx('flex')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            className={cx('search-inp')}
                            type="text" placeholder='Hôm nay bạn cần tìm gì?' spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
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