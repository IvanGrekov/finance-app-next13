import { useEffect } from 'react';

import { NOTIFICATION_DISPLAY_DURATION } from 'constants/notifications';
import { useNotifications } from 'models/contexts/Notifications';

export const useAutoRemoveNotification = (): void => {
    const { notifications, setNotifications } = useNotifications();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (notifications.length) {
            timeoutId = setTimeout(() => {
                setNotifications((prevNotifications) => prevNotifications.slice(1));
            }, NOTIFICATION_DISPLAY_DURATION);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [notifications, setNotifications]);
};
