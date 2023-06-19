import { ReactNode, CSSProperties } from 'react';

import cx from 'classnames';

import styles from 'components/typography/Typography.module.scss';
import { TTypographyElements, TTypographyVariants } from 'components/typography/types';

interface ITypographyProps {
    children: ReactNode;
    element?: TTypographyElements;
    variant?: TTypographyVariants;
    style?: CSSProperties;
    className?: string;
}

export default function Typography({
    children,
    element = 'p',
    variant = 'body1',
    style,
    className,
}: ITypographyProps): JSX.Element {
    const Element = element;

    return (
        <Element
            className={cx(styles.typography, styles[`typography--${variant}`], className)}
            style={style}
        >
            {children}
        </Element>
    );
}
