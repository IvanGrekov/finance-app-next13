import { useQuery, UseQueryResult } from '@tanstack/react-query';

import API from 'models/API/crypto';
import { END_POINTS, CRYPTO_COINS, QUERY_KEYS } from 'models/API/crypto/constants';
import { TCryptoList } from 'models/API/crypto/types/cryptoList';
import { formatCryptoList } from 'models/API/crypto/utils/cryptoList.utils';

export const getCryptoList = async (): Promise<TCryptoList> => {
    const { data } = await API.get(END_POINTS.getCryptoList, {
        params: {
            fsyms: CRYPTO_COINS.join(),
        },
    });

    return formatCryptoList(data.RAW);
};

export const useCryptoList = (): UseQueryResult<TCryptoList> => {
    return useQuery({
        queryKey: [QUERY_KEYS.cryptoList],
        queryFn: getCryptoList,
    });
};
