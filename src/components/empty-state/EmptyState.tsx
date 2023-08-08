'use client';

import ErrorIcon from '@mui/icons-material/Error';
import FolderOffIcon from '@mui/icons-material/FolderOff';

import styles from 'components/empty-state/EmptyState.module.scss';
import Typography from 'components/typography/Typography';

interface IEmptyStateProps {
    isError?: boolean;
    text?: string;
}

export default function EmptyState({ isError, text }: IEmptyStateProps): JSX.Element {
    const iconColorClassName = isError ? 'red-color' : 'primary-color';
    const textColorClassName = isError ? 'red-color' : 'white-color';
    const defaultText = isError
        ? 'Something went wrong, try to load data later'
        : 'There is no any data yet';

    return (
        <section className={styles['empty-state']}>
            <div className={styles.icon}>
                {isError ? (
                    <ErrorIcon className={iconColorClassName} />
                ) : (
                    <FolderOffIcon className={iconColorClassName} />
                )}
            </div>

            <Typography element="h2" variant="h4" className={textColorClassName}>
                {text || defaultText}
            </Typography>
        </section>
    );
}
