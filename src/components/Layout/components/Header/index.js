import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faCloudArrowUp,
    faEnvelopeOpenText,
    faCommentDots,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

import Button from '~/components/Button';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWarpper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MenuItem = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Anh',
        children: {
            title: 'Ngôn Ngữ',
            data: [
                {
                    type: 'laguage',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'laguage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt bàn phím',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'laguage':
                break;
            //
            default:
            ///
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: 'user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận Xu',
            to: 'coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: 'setting',
        },
        ...MenuItem,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng Xuất',
            to: 'logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Videos" placement="bottom" delay={[2, 200]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy content="Massage" placement="bottom" delay={[2, 200]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </button>
                            </Tippy>
                            <Tippy content="Mailbox" placement="bottom" delay={[2, 200]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MenuItem} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/81cbdbc3f0140c13a9fb5a0e8f479a50.jpeg?lk3s=a5d48078&x-expires=1709272800&x-signature=j%2BXFRh6y%2F1xWUHvMgBMeVyOA7%2Bc%3D"
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
