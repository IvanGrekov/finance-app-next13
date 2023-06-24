import { PropsWithChildren } from 'react';

import styles from 'components/content-wrapper/ContentWrapper.module.scss';
import Header from 'components/header/Header';
import Notifications from 'components/notifications/Notifications';
import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';

export default function ContentWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <main className={styles.main}>
            <Notifications />
            <Header />
            <PageLoadingIndicator />
            {children}
        </main>
    );
}
