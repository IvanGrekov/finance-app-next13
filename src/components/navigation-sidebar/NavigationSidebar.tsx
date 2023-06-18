'use client';

import cx from 'classnames';

import styles from 'components/navigation-sidebar/NavigationSidebar.module.scss';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function NavigationSidebar(): JSX.Element {
    const { open } = useMobileNavigationSidebar();

    return (
        <aside className={cx(styles.sidebar, { [styles['sidebar--open']]: open })}>
            NavigationSidebar
        </aside>
    );
}
