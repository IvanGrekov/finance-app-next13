'use client';

import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from 'components/navigation-menu/NavigationMenu.module.scss';
import { NAV_ITEMS } from 'components/navigation-menu/constants';
import Typography from 'components/typography/Typography';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function NavigationMenu(): JSX.Element {
    const pathname = usePathname();
    const { toggleSidebar } = useMobileNavigationSidebar();

    return (
        <ul className={styles.list}>
            {NAV_ITEMS.map(({ icon, link, text }) => {
                return (
                    <li key={link} className={styles.item}>
                        <Link
                            href={link}
                            shallow={true}
                            onClick={toggleSidebar}
                            className={cx(styles['item-content'], {
                                [styles['item-content--active']]: pathname.startsWith(link),
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
