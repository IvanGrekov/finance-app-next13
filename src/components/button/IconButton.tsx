import cx from 'classnames';

import { IBaseButtonProps } from 'components/button/types';

import 'components/button/IconButton.styles.scss';

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
            className={cx('icon-button', className, {
                ['icon-button--disabled']: isDisabled,
            })}
        >
            {icon}
        </button>
    );
}
