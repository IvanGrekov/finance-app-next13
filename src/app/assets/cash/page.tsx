import { dehydrate, QueryClient } from '@tanstack/react-query';

// import CashAssets from 'components/cash-assets/CashAssets';
// import HydrateClient from 'components/hydrate-client/HydrateClient';
import { QUERY_KEYS } from 'models/API/exchange-rates/constants';
import { getExchangeRates } from 'models/API/exchange-rates/services';
import { IPageData } from 'models/types/getPageData';

const queryClient = new QueryClient();

async function getData(): Promise<IPageData> {
    await queryClient.prefetchQuery([QUERY_KEYS.exchangeRates], getExchangeRates);

    return { dehydratedState: dehydrate(queryClient) };
}

export const metadata = {
    title: 'Cash Assets - Finance App',
    description: 'Track your cash assets',
};

export default async function CashAssetsPage(): Promise<JSX.Element> {
    // NOTE: commented to don't waste API calls (IG)
    getData;
    // const { dehydratedState } = await getData();

    return (
        // <HydrateClient state={dehydratedState}>
        // <CashAssets />
        <>Cash Assets</>
        // </HydrateClient>
    );
}
