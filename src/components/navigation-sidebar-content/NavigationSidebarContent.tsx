'use client';

// TODO: Replace Icon and remove "'use client';"
import CloseIcon from '@mui/icons-material/Close';

import IconButton from 'components/button/IconButton';
import Logo from 'components/logo/Logo';
import NavigationMenu from 'components/navigation-menu/NavigationMenu';
import styles from 'components/navigation-sidebar-content/NavigationSidebarContent.module.scss';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function NavigationSidebarContent(): JSX.Element {
    const { toggleSidebar } = useMobileNavigationSidebar();

    return (
        <div className={styles.container}>
            <div className={styles['logo-wrapper']}>
                <Logo onClick={toggleSidebar} />
                <IconButton
                    icon={<CloseIcon fontSize="small" />}
                    onClick={toggleSidebar}
                    title="Toggle navigation sidebar"
                    className={styles['close-button']}
                />
            </div>
            <div className={styles['navigation-wrapper']}>
                <NavigationMenu />
            </div>
        </div>
    );
}
