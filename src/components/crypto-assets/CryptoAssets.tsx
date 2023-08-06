'use client';

import { useEffect } from 'react';

import useCryptoList from 'models/API/crypto/services/cryptoList';
import { usePageLoading } from 'models/contexts/PageLoading';
import { formatCurrency } from 'utils/format.utils';

export default function CryptoAssets(): JSX.Element {
    const { setIsLoading } = usePageLoading();
    const { data, isLoading } = useCryptoList();

    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading, setIsLoading]);

    return (
        <ul>
            {data?.map((crypto) => (
                <li key={crypto.symbol}>
                    {crypto.symbol} - {formatCurrency(crypto.priceUsd)}
                </li>
            ))}
        </ul>
    );
}
