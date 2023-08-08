// NOTE: https://app.currencyapi.com/dashboard (IG)
export const BASE_URL = 'https://api.currencyapi.com/v3';

export const API_KEY_PARAM = 'cur_live_kCEDfqEAArxxehjCFj5tJazYfGKxIIMQ1O9ZbA1G';

export const CURRENCIES = ['EUR', 'USD', 'UAH'];

export const EXCHANGE_RATES_SEARCH_PARAMS = new URLSearchParams({
    apikey: API_KEY_PARAM,
    currencies: CURRENCIES.join(),
});

export const END_POINTS = {
    getExchangeRates: `${BASE_URL}/latest`,
};

export const QUERY_KEYS = {
    exchangeRates: 'exchangeRates',
};
