import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWarpper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWarpper>
                                <h4 className={cx('search-title')}>Accounts:</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWarpper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button rounded>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
