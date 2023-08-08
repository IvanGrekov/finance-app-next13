import { END_POINTS, EXCHANGE_RATES_SEARCH_PARAMS } from 'models/API/exchange-rates/constants';
import { IExchangeRatesData } from 'models/types/exchangeRates';
import { INextRequestOptions } from 'models/types/getPageData';

type TGetExchangeRates = (nextRequestOptions?: INextRequestOptions) => Promise<IExchangeRatesData>;

export const getExchangeRates: TGetExchangeRates = async (nextRequestOptions = {}) => {
    const res = await fetch(`${END_POINTS.getExchangeRates}?${EXCHANGE_RATES_SEARCH_PARAMS}`, {
        next: nextRequestOptions,
    });
    const data = await res.json();

    return data.data || {};
};
