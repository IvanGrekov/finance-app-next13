import { CSSProperties } from 'react';

import cx from 'classnames';

import styles from 'components/button/Button.module.scss';
import { IBaseButtonProps } from 'components/button/types';
import Loader from 'components/loader/Loader';
import Typography from 'components/typography/Typography';
import { TTypographyVariants } from 'components/typography/types';

export interface IButtonProps extends IBaseButtonProps {
    text: string;
    type?: 'button' | 'submit';
    form?: string;
    variant?: 'outlined' | 'contained' | 'ghost';
    size?: 'small' | 'big' | 'regular';
    textVariant?: TTypographyVariants;
    isLoading?: boolean;
    style?: CSSProperties;
}

export default function Button({
    text,
    onClick,
    type = 'button',
    form,
    variant = 'outlined',
    size = 'regular',
    textVariant = size === 'small' ? 'body2' : 'button',
    title,
    isDisabled,
    isLoading,
    style,
}: IButtonProps): JSX.Element {
    const isButtonDisabled = isDisabled || isLoading;

    return (
        <button
            type={type}
            form={form}
            title={title}
            disabled={isButtonDisabled}
            onClick={onClick}
            className={cx(styles.button, styles[`button--${variant}`], styles[`button--${size}`], {
                [styles['button--disabled']]: isDisabled,
                [styles['button--loading']]: isLoading,
            })}
            style={style}
        >
            {isLoading ? (
                <span className={styles.loader}>
                    <Loader />
                </span>
            ) : (
                <>
                    {text && (
                        <Typography
                            element="span"
                            variant={textVariant}
                            style={{ lineHeight: 1, textTransform: 'uppercase', fontWeight: 600 }}
                        >
                            {text}
                        </Typography>
                    )}
                </>
            )}
        </button>
    );
}
