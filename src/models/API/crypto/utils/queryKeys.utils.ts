import { QUERY_KEYS } from 'models/API/crypto/constants';

export const getCryptoPriceQueryKey = (symbols: string[]): string => {
    return `${QUERY_KEYS.cryptoPrice}-${symbols.join()}`;
};
