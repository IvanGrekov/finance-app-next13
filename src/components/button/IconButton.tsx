import cx from 'classnames';

import styles from 'components/button/IconButton.module.scss';
import { IBaseButtonProps } from 'components/button/types';

export interface IIconButtonProps extends IBaseButtonProps {
    icon: JSX.Element;
}

export default function IconButton({
    icon,
    onClick,
    title,
    isDisabled,
    className,
}: IIconButtonProps): JSX.Element {
    return (
        <button
            title={title}
            onClick={onClick}
            disabled={isDisabled}
            className={cx(styles['icon-button'], className, {
                [styles['icon-button--disabled']]: isDisabled,
            })}
        >
            {icon}
        </button>
    );
}
