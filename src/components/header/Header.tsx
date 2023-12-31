import AccountPopover from 'components/account-popover/AccountPopover';
import styles from 'components/header/Header.module.scss';
import Toolbar from 'components/toolbar/Toolbar';

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Toolbar toggleButtonClassName={styles['toolbar-toggle-button']} />
            <AccountPopover className={styles['account-popover']} />
        </header>
    );
}
