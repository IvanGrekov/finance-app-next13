import Logo from 'components/logo/Logo';
import NavigationMenu from 'components/navigation-menu/NavigationMenu';
import styles from 'components/navigation-sidebar-content/NavigationSidebarContent.module.scss';

export default function NavigationSidebarContent(): JSX.Element {
    return (
        <div className={styles.container}>
            <Logo />
            <NavigationMenu />
        </div>
    );
}
