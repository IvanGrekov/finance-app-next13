import Link from 'next/link';

import styles from 'components/logo/Logo.module.scss';
import Typography from 'components/typography/Typography';

export default function Logo(): JSX.Element {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.link}>
                <Typography element="span" variant="subtitle2" className={styles.title}>
                    Givneyt
                </Typography>

                <Typography element="span" variant="subtitle1" className={styles.subtitle}>
                    Finance
                </Typography>
            </Link>
        </div>
    );
}
