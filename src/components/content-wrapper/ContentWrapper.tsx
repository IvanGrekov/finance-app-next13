import { PropsWithChildren } from 'react';

import styles from 'components/content-wrapper/ContentWrapper.module.scss';
import ErrorBoundary from 'components/error-boundary';
import Header from 'components/header/Header';
import Notifications from 'components/notifications/Notifications';
import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';
import Paper from 'components/paper/Paper';

export default function ContentWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <main className={styles.main}>
            <ErrorBoundary>
                <Notifications />
                <Header />
                <PageLoadingIndicator />
                <section className={styles['content-wrapper']}>
                    <Paper>{children}</Paper>
                </section>
            </ErrorBoundary>
        </main>
    );
}
