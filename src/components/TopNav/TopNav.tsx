import React, { FC } from 'react';
import { useFetchUser } from '../../hooks/useFetchUser';
import styles from './TopNav.module.scss';

interface TopNavProps {
  onMenuClick: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { onMenuClick } = props;
  const { user } = useFetchUser();
  return (
    <div className={styles.topNav}>
      <div className={styles.logo}>
        <div>
          <img src="/logo_b.png" alt="" />
        </div>
        <div style={{ width: '32px' }}></div>
        <div onClick={onMenuClick}>
          <img src="/burger_menu.png" alt="" />
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.initials}>{`${user?.firstName?.charAt(
          0,
        )}${user?.lastName?.charAt(0)}`}</div>
        <div
          style={{ color: '#005B96', fontWeight: '700' }}
        >{`${user?.firstName} ${user?.lastName}`}</div>
      </div>
    </div>
  );
};
