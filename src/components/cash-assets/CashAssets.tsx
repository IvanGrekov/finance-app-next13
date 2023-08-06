'use client';

import { useEffect } from 'react';

import { useExchangeRates } from 'models/API/exchange-rates/services';
import { usePageLoading } from 'models/contexts/PageLoading';
import { formatCurrency } from 'utils/format.utils';

export default function CashAssets(): JSX.Element {
    const { setIsLoading } = usePageLoading();
    const { data, isLoading } = useExchangeRates();

    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading, setIsLoading]);

    return (
        <ul>
            {Object.values(data || {}).map(({ code, value }) => (
                <li key={code}>
                    {code} - {formatCurrency(value)}
                </li>
            ))}
        </ul>
    );
}
