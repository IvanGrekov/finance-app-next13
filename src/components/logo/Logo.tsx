import styles from 'components/logo/Logo.module.scss';
import Typography from 'components/typography/Typography';

export default function Logo(): JSX.Element {
    return (
        <div className={styles.container}>
            <Typography variant="subtitle2" className={styles.title}>
                Givneyt
            </Typography>

            <Typography variant="subtitle1" className={styles.subtitle}>
                Finance
            </Typography>
        </div>
    );
}
