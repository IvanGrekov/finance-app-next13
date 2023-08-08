export interface IApiCryptoCurrency {
    BTC: {
        FROMSYMBOL: string;
        PRICE: number;
        IMAGEURL: string;
    };
    USD: {
        FROMSYMBOL: string;
        PRICE: number;
        IMAGEURL: string;
    };
}

export interface IApiCryptoList {
    [key: string]: IApiCryptoCurrency;
}
