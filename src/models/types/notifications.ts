import { Dispatch, SetStateAction } from 'react';

export enum ENotificationType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
}

export interface INotification {
    id: string;
    message: string;
    type: ENotificationType;
}

export type TNotifications = Array<INotification>;

export type TAddNotification = (notification: INotification) => void;

export type TUpdateNotifications = Dispatch<SetStateAction<TNotifications>>;

export type TNotificationsContextValue = {
    notifications: TNotifications;
    addNotification: TAddNotification;
    setNotifications: TUpdateNotifications;
};
