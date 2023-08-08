'use client';

// TODO: Replace Icon and remove "'use client';"
import MenuIcon from '@mui/icons-material/Menu';
import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import styles from 'components/toolbar/Toolbar.module.scss';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

interface IToolbarProps {
    toggleButtonClassName?: string;
}

export default function Toolbar({ toggleButtonClassName }: IToolbarProps): JSX.Element {
    const { toggleSidebar } = useMobileNavigationSidebar();

    return (
        <div className={cx(styles.toolbar)}>
            <IconButton
                icon={<MenuIcon fontSize="small" />}
                onClick={toggleSidebar}
                title="Toggle navigation sidebar"
                className={cx(styles['toggle-button'], toggleButtonClassName)}
            />
        </div>
    );
}
