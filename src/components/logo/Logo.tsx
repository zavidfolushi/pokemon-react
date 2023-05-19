import React from 'react';
import cn from 'classnames';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={cn(styles.nav__block, 'pt-2 pb-2')}>
            <h2 className={styles.nav__logo}>
                <span>Poke</span>dex
            </h2>
        </div>
    );
};

export default Logo;