import {
    END_POINTS,
    CRYPTO_LIST_SEARCH_PARAMS,
    REQUEST_OPTIONS,
} from 'models/API/crypto/constants';
import { formatCryptoList } from 'models/API/crypto/utils/cryptoList.utils';
import { TCryptoList } from 'models/types/crypto';
import { INextRequestOptions } from 'models/types/getPageData';

type TGetCryptoList = (nextRequestOptions?: INextRequestOptions) => Promise<TCryptoList>;

export const getCryptoList: TGetCryptoList = async (nextRequestOptions = {}) => {
    const res = await fetch(`${END_POINTS.getCryptoList}?${CRYPTO_LIST_SEARCH_PARAMS}`, {
        ...REQUEST_OPTIONS,
        next: nextRequestOptions,
    });
    const data = await res.json();

    return formatCryptoList(data.RAW);
};
