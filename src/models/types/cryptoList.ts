export interface IApiCryptoCurrency {
    CoinInfo: {
        Id: string;
        Name: string;
        FullName: string;
        ImageUrl: string;
    };
    DISPLAY: {
        USD: {
            PRICE: string;
            FROMSYMBOL: string;
        };
    };
}

export type TApiCryptoList = IApiCryptoCurrency[];

export interface ICryptoCurrency {
    id: string;
    name: string;
    fullName: string;
    imageUrl: string;
    price: string;
    symbol: string;
}

export type TCryptoList = ICryptoCurrency[];
