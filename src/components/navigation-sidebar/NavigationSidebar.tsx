'use client';

import cx from 'classnames';

import styles from 'components/navigation-sidebar/NavigationSidebar.module.scss';
import NavigationSidebarContent from 'components/navigation-sidebar-content/NavigationSidebarContent';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function NavigationSidebar(): JSX.Element {
    const { open } = useMobileNavigationSidebar();

    return (
        <aside className={cx(styles.sidebar, { [styles['sidebar--open']]: open })}>
            <NavigationSidebarContent />
        </aside>
    );
}
