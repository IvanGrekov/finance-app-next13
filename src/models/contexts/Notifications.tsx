'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

import { useInitNotifications } from 'hooks/notifications.hooks';
import { TNotificationsContextValue } from 'models/types/notifications';

const NotificationsContext = createContext<TNotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: PropsWithChildren): JSX.Element {
    const notificationsContextValue = useInitNotifications();

    return (
        <NotificationsContext.Provider value={notificationsContextValue}>
            {children}
        </NotificationsContext.Provider>
    );
}

export const useNotifications = (): TNotificationsContextValue => {
    const context = useContext(NotificationsContext);

    if (!context) {
        throw new Error('useNotifications must be used within a NotificationsProvider');
    }

    return context;
};
