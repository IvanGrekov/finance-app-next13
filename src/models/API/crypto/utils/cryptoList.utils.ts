import { IApiCryptoList, TCryptoList } from 'models/API/crypto/types/cryptoList';

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
