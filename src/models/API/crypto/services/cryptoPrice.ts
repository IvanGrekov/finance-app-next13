import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { END_POINTS } from 'models/API/crypto/constants';
import API from 'models/API/crypto/index';
import { getCryptoPriceQueryKey } from 'models/API/crypto/utils/queryKeys.utils';

export const getCryptoPrice = async (symbols: string[]): Promise<unknown> => {
    const { data } = await API.get(END_POINTS.getCryptoPrice, {
        params: {
            fsyms: symbols.join(),
        },
    });

    return data.Data;
};

const useCryptoPrice = (symbols: string[]): UseQueryResult => {
    return useQuery({
        queryKey: [getCryptoPriceQueryKey(symbols)],
        queryFn: () => getCryptoPrice(symbols),
    });
};

export default useCryptoPrice;
