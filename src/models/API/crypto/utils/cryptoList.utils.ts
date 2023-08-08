import { IApiCryptoList } from 'models/API/crypto/types/cryptoList';
import { TCryptoList } from 'models/types/crypto';

export const formatCryptoList = (data?: IApiCryptoList): TCryptoList => {
    if (!data) {
        return [];
    }

    return Object.values(data).map(({ BTC, USD }) => {
        const { FROMSYMBOL, IMAGEURL, PRICE: priceBtc } = BTC;
        const { PRICE: priceUsd } = USD;

        return {
            symbol: FROMSYMBOL,
            imageUrl: IMAGEURL,
            priceBtc,
            priceUsd,
        };
    });
};
