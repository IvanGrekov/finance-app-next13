export interface ICryptoCurrency {
    symbol: string;
    imageUrl: string;
    priceUsd: number;
    priceBtc: number;
}

export type TCryptoList = ICryptoCurrency[];
