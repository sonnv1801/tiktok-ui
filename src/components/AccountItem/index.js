import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/81cbdbc3f0140c13a9fb5a0e8f479a50.jpeg?lk3s=a5d48078&x-expires=1709272800&x-signature=j%2BXFRh6y%2F1xWUHvMgBMeVyOA7%2Bc%3D"
                alt=""
            />
            <div className={'info'} style={{ marginLeft: '8px' }}>
                <p className={cx('name')}>
                    <span>Chill With Son</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={'username'}>chilwihson</span>
            </div>
        </div>
    );
}

export default AccountItem;
