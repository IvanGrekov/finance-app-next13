import { useEffect, MutableRefObject } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { ITabsContextValue } from 'components/tabs/TabsContext';
import { ITabProps } from 'components/tabs/types/tab';

type TTabElementRef = MutableRefObject<HTMLDivElement | null>;

type TUseTabIndicatorConnectionProps = Pick<ITabProps, 'path'> & {
    tabElementRef: TTabElementRef;
    indicatorElement?: ITabsContextValue['indicatorElement'];
    initialIndicatorLeftPosition?: ITabsContextValue['initialIndicatorLeftPosition'];
};

type TUseTabIndicatorConnection = (props: TUseTabIndicatorConnectionProps) => void;

export const useTabIndicatorConnection: TUseTabIndicatorConnection = ({
    tabElementRef,
    indicatorElement,
    initialIndicatorLeftPosition,
    path,
}) => {
    const pathname = usePathname();

    useEffect(() => {
        const tabElementRect = tabElementRef.current?.getBoundingClientRect();

        if (!indicatorElement || !initialIndicatorLeftPosition || !tabElementRect) {
            return;
        }

        if (path === pathname) {
            const newLeftPosition = tabElementRect.left - initialIndicatorLeftPosition;
            indicatorElement.style.left = `${newLeftPosition}px`;
        }
    }, [tabElementRef, indicatorElement, initialIndicatorLeftPosition, path, pathname]);
};

type TUseTabListenerProps = Pick<ITabProps, 'path'> & {
    tabElementRef: TTabElementRef;
};
type TUseTabListener = (props: TUseTabListenerProps) => void;

export const useTabListener: TUseTabListener = ({ tabElementRef, path }) => {
    const { push } = useRouter();

    useEffect(() => {
        const tabElement = tabElementRef.current;

        if (!tabElement) {
            return;
        }

        const clickHandler = (): void => {
            push(`../${path}`, { shallow: true });
        };

        tabElement.addEventListener('click', clickHandler);

        return (): void => {
            tabElement.removeEventListener('click', clickHandler);
        };
    }, [tabElementRef, push, path]);
};
