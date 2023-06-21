import { PropsWithChildren } from 'react';

import styles from 'components/content-wrapper/ContentWrapper.module.scss';
import Header from 'components/header/Header';
import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';

export default function ContentWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <main className={styles.main}>
            <Header />
            <PageLoadingIndicator />
            {children}
        </main>
    );
}
