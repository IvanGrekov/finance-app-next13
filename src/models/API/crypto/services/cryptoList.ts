import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { END_POINTS, QUERY_KEYS } from 'models/API/crypto/constants';
import API from 'models/API/crypto/index';
import { TCryptoList } from 'models/types/cryptoList';
import { formatCryptoList } from 'utils/cryptoList.utils';

export const getCryptoList = async (): Promise<TCryptoList> => {
    const { data } = await API.get(END_POINTS.getCryptoList, {
        params: {
            limit: 100,
        },
    });

    return formatCryptoList(data.Data);
};

const useCryptoList = (): UseQueryResult<TCryptoList> => {
    return useQuery({
        queryKey: [QUERY_KEYS.cryptoList],
        queryFn: getCryptoList,
    });
};

export default useCryptoList;
