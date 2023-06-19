'use client';

import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from 'components/navigation-menu/NavigationMenu.module.scss';
import { NAV_ITEMS } from 'components/navigation-menu/constants';
import Typography from 'components/typography/Typography';

export default function NavigationMenu(): JSX.Element {
    const pathname = usePathname();

    return (
        <ul className={styles.list}>
            {NAV_ITEMS.map(({ icon, link, text }) => {
                return (
                    <li key={link} className={styles.item}>
                        <Link
                            href={link}
                            className={cx(styles['item-content'], {
                                [styles['item-content--active']]: pathname === link,
                            })}
                        >
                            <Typography element="span" variant="body1" className={styles.text}>
                                {icon}
                                {text}
                            </Typography>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
