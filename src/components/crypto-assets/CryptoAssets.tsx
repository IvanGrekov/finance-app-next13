'use client';

import { useEffect } from 'react';

import useCryptoList from 'models/API/crypto/services/cryptoList';
import { usePageLoading } from 'models/contexts/PageLoading';

export default function CryptoAssets(): JSX.Element {
    const { setIsLoading } = usePageLoading();
    const { data, isLoading } = useCryptoList();

    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading, setIsLoading]);

    return (
        <ul>
            {data?.map((crypto) => (
                <li key={crypto.id}>{crypto.name}</li>
            ))}
        </ul>
    );
}
