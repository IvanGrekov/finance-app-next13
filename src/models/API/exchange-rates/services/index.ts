import { useQuery, UseQueryResult } from '@tanstack/react-query';

import API from 'models/API/exchange-rates';
import { END_POINTS, QUERY_KEYS, CURRENCIES } from 'models/API/exchange-rates/constants';
import { IExchangeRatesData } from 'models/API/exchange-rates/types';

export const getExchangeRates = async (): Promise<IExchangeRatesData> => {
    const { data } = await API.get(END_POINTS.getExchangeRates, {
        params: {
            currencies: CURRENCIES.join(),
        },
    });

    return data.data;
};

export const useExchangeRates = (): UseQueryResult<IExchangeRatesData> => {
    return useQuery({
        queryKey: [QUERY_KEYS.exchangeRates],
        queryFn: getExchangeRates,
    });
};
