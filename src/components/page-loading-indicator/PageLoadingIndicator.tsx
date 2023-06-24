'use client';

import cx from 'classnames';

import styles from 'components/page-loading-indicator/PageLoadingIndicator.module.scss';
import Skeleton from 'components/skeleton/Skeleton';
import { usePageLoading } from 'models/contexts/PageLoading';

export default function PageLoadingIndicator(): JSX.Element | null {
    const { isLoading } = usePageLoading();

    return (
        <Skeleton
            height={8}
            className={cx(styles.skeleton, {
                [styles['skeleton--visible']]: isLoading,
            })}
        />
    );
}
