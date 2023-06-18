import { PropsWithChildren } from 'react';

import styles from 'components/content-wrapper/ContentWrapper.module.scss';

export default function ContentWrapper({ children }: PropsWithChildren): JSX.Element {
    return <main className={styles.main}>{children}</main>;
}
