'use client';

import { useState, useCallback, useMemo } from 'react';

// import { AxiosError } from 'axios';

import { DEFAULT_NOTIFICATIONS, MAX_NOTIFICATIONS } from 'constants/notifications';
import { TNotificationsContextValue, TAddNotification } from 'models/types/notifications';

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

// type TUseHandleNetworkError = (error: AxiosError | null) => void;

// export const useHandleNetworkError: TUseHandleNetworkError = (error) => {
//     const context = useContext(NotificationsContext);

//     if (!context) {
//         throw new Error('useHandleNetworkError must be used within a NotificationsProvider');
//     }

//     const { addNotification } = context;

//     useEffect(() => {
//         if (error) {
//             addNotification({
//                 message: `Network error: ${error.message}`,
//                 id: uuidv4(),
//                 type: ENotificationType.ERROR,
//             });
//         }
//     }, [error, addNotification]);
// };
