'use client';

import { createPortal } from 'react-dom';

import CloseIcon from '@mui/icons-material/Close';
import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import styles from 'components/notifications/Notifications.module.scss';
import { useAutoRemoveNotification } from 'components/notifications/hooks';
import Typography from 'components/typography/Typography';
import { usePortalContainer } from 'hooks/portalContainer.hooks';
import { useNotifications } from 'models/contexts/Notifications';
import { INotification } from 'models/types/notifications';

export default function Notifications(): JSX.Element | null {
    const { mounted, portalContainer } = usePortalContainer('notifications-root');
    const { notifications, setNotifications } = useNotifications();

    useAutoRemoveNotification();

    const onRemoveNotification = (id: INotification['id']): void => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const notificationsComponent = (
        <div className={styles.notifications}>
            {notifications.map(({ id, message, type }) => (
                <div key={id} className={cx(styles.item, styles[`item--${type}`])}>
                    <Typography element="h6" variant="subtitle2" className={styles.text}>
                        {message}
                    </Typography>

                    <IconButton
                        icon={<CloseIcon fontSize="small" />}
                        onClick={(): void => onRemoveNotification(id)}
                        title="Remove notification"
                        className={styles['close-button']}
                    />
                </div>
            ))}
        </div>
    );

    return mounted ? createPortal(notificationsComponent, portalContainer as HTMLElement) : null;
}
