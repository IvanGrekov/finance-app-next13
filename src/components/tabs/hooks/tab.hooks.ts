import { useEffect, MutableRefObject } from 'react';

import { ITabsContextValue } from 'components/tabs/TabsContext';
import { ITabProps } from 'components/tabs/types/tab';
import { useUpdateSearchParams } from 'hooks/searchParams.hooks';

type TTabElementRef = MutableRefObject<HTMLDivElement | null>;

type TUseTabIndicatorConnectionProps = Pick<ITabProps, 'value' | 'currentValue'> & {
    tabElementRef: TTabElementRef;
    indicatorElement?: ITabsContextValue['indicatorElement'];
    initialIndicatorLeftPosition?: ITabsContextValue['initialIndicatorLeftPosition'];
};

type TUseTabIndicatorConnection = (props: TUseTabIndicatorConnectionProps) => void;

export const useTabIndicatorConnection: TUseTabIndicatorConnection = ({
    tabElementRef,
    indicatorElement,
    initialIndicatorLeftPosition,
    value,
    currentValue,
}) => {
    useEffect(() => {
        const tabElementRect = tabElementRef.current?.getBoundingClientRect();

        if (!indicatorElement || !initialIndicatorLeftPosition || !tabElementRect) {
            return;
        }

        if (value === currentValue) {
            const newLeftPosition = tabElementRect.left - initialIndicatorLeftPosition;
            indicatorElement.style.left = `${newLeftPosition}px`;
        }
    }, [tabElementRef, indicatorElement, initialIndicatorLeftPosition, value, currentValue]);
};

type TUseTabListenerProps = Pick<ITabProps, 'value' | 'searchParamKey'> & {
    tabElementRef: TTabElementRef;
};
type TUseTabListener = (props: TUseTabListenerProps) => void;

export const useTabListener: TUseTabListener = ({ tabElementRef, value, searchParamKey }) => {
    const updateSearchParams = useUpdateSearchParams();

    useEffect(() => {
        const tabElement = tabElementRef.current;

        if (!tabElement) {
            return;
        }

        const clickHandler = (): void => {
            updateSearchParams(searchParamKey, value);
        };

        tabElement.addEventListener('click', clickHandler);

        return (): void => {
            tabElement.removeEventListener('click', clickHandler);
        };
    }, [tabElementRef, updateSearchParams, value, searchParamKey]);
};
