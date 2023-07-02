import { PropsWithChildren } from 'react';

import cx from 'classnames';

import styles from 'components/paper/Paper.module.scss';

interface IPaperProps extends PropsWithChildren {
    className?: string;
}

export default function Paper({ children, className }: IPaperProps): JSX.Element {
    return <div className={cx(styles.paper, className)}>{children}</div>;
}
