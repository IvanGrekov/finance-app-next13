import { useRef } from 'react';

import Button from 'components/button/Button';
import styles from 'components/tabs/Tab.module.scss';
import { useTabsContext } from 'components/tabs/TabsContext';
import { useTabIndicatorConnection, useTabListener } from 'components/tabs/hooks/tab.hooks';
import { ITabProps } from 'components/tabs/types/tab';

export default function Tab({
    value,
    currentValue,
    label,
    searchParamKey,
}: ITabProps): JSX.Element | null {
    const tabsContext = useTabsContext();
    const tabElementRef = useRef<HTMLDivElement | null>(null);

    useTabIndicatorConnection({
        tabElementRef,
        value,
        currentValue,
        ...(tabsContext || {}),
    });

    useTabListener({ tabElementRef, value, searchParamKey });

    return (
        <div ref={tabElementRef} className={styles.tab}>
            <Button
                text={label}
                variant="ghost"
                textVariant="body2"
                className={styles['tab-button']}
            />
        </div>
    );
}
