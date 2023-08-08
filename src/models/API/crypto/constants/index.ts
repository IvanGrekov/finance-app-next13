// NOTE: https://www.cryptocompare.com/cryptopian/api-keys (IG)
export const BASE_URL = 'https://min-api.cryptocompare.com/data';

export const AUTHORIZATION_HEADER =
    'Apikey 4836bd7db03506fa93abbf5169723fc658590029a1dc9298da2f7067bd25231a';

export const PRICE_CURRENCY_PARAM = 'BTC,USD';

export const CRYPTO_COINS = [
    'BTC',
    'ETH',
    'USDT',
    'BNB',
    'XRP',
    'DOGE',
    'ADA',
    'SOL',
    'TRX',
    'MATIC',
    'DOT',
    'LTC',
    'SHIB',
    'AVAX',
    'TON',
    'XLM',
    'LINK',
    'BUSD',
    'ATOM',
    'XMR',
    'AAVE',
    'SAND',
    'IMX',
    'EOS',
    'THETA',
    'MANA',
    'GALA',
];

export const CRYPTO_LIST_SEARCH_PARAMS = new URLSearchParams({
    fsyms: CRYPTO_COINS.join(),
    tsyms: PRICE_CURRENCY_PARAM,
});

export const CRYPTO_PRICE_SEARCH_PARAMS = new URLSearchParams({
    fsyms: CRYPTO_COINS.join(),
});

export const REQUEST_OPTIONS = {
    headers: {
        authorization: AUTHORIZATION_HEADER,
    },
};

export const END_POINTS = {
    getCryptoList: `${BASE_URL}/pricemultifull`,
    getCryptoPrice: `${BASE_URL}/pricemulti`,
};

export const QUERY_KEYS = {
    cryptoList: 'cryptoList',
    cryptoPrice: 'cryptoPrice',
};
