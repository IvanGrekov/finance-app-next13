import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
    END_POINTS,
    CRYPTO_PRICE_SEARCH_PARAMS,
    REQUEST_OPTIONS,
    QUERY_KEYS,
} from 'models/API/crypto/constants';

export const getCryptoPrice = async (symbols: string[]): Promise<unknown> => {
    CRYPTO_PRICE_SEARCH_PARAMS.set('fsyms', symbols.join());

    const res = await fetch(END_POINTS.getCryptoList + CRYPTO_PRICE_SEARCH_PARAMS, REQUEST_OPTIONS);
    const data = await res.json();

    return data.Data;
};

const useCryptoPrice = (symbols: string[]): UseQueryResult => {
    return useQuery({
        queryKey: [QUERY_KEYS.cryptoPrice, symbols.join('-')],
        queryFn: () => getCryptoPrice(symbols),
    });
};

export default useCryptoPrice;
