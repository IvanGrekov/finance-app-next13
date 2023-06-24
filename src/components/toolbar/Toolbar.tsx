'use client';

import MenuIcon from '@mui/icons-material/Menu';

import IconButton from 'components/button/IconButton';
import styles from 'components/toolbar/Toolbar.module.scss';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function Toolbar(): JSX.Element {
    const { toggleSidebar } = useMobileNavigationSidebar();

    return (
        <div className={styles.toolbar}>
            <IconButton
                icon={<MenuIcon fontSize="small" />}
                onClick={toggleSidebar}
                title="Toggle navigation sidebar"
                className={styles['toggle-button']}
            />
        </div>
    );
}
