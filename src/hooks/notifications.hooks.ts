import { useState, useCallback, useMemo, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_NOTIFICATIONS, MAX_NOTIFICATIONS } from 'constants/notifications';
import { useNotifications } from 'models/contexts/Notifications';
import {
    TNotificationsContextValue,
    TAddNotification,
    ENotificationType,
} from 'models/types/notifications';

type TUseInitNotifications = () => TNotificationsContextValue;

export const useInitNotifications: TUseInitNotifications = () => {
    const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);

    const addNotification = useCallback<TAddNotification>((newNotification) => {
        setNotifications((prevNotifications) => {
            const slicedPrevNotifications =
                prevNotifications.length === MAX_NOTIFICATIONS
                    ? [...prevNotifications.slice(1, MAX_NOTIFICATIONS)]
                    : prevNotifications;

            return [...slicedPrevNotifications, newNotification];
        });
    }, []);

    return useMemo(
        () => ({ notifications, addNotification, setNotifications }),
        [notifications, addNotification, setNotifications],
    );
};

type TUseHandleNetworkError = (error: Error | null) => void;

export const useHandleNetworkError: TUseHandleNetworkError = (error) => {
    const context = useNotifications();

    const { addNotification } = context;

    useEffect(() => {
        if (error) {
            addNotification({
                message: `Network error: ${error.message}`,
                id: uuidv4(),
                type: ENotificationType.ERROR,
            });
        }
    }, [error, addNotification]);
};
