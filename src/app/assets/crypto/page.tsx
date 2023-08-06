import { dehydrate, QueryClient } from '@tanstack/react-query';

// import CryptoAssets from 'components/crypto-assets/CryptoAssets';
// import HydrateClient from 'components/hydrate-client/HydrateClient';
import { QUERY_KEYS } from 'models/API/crypto/constants';
import { getCryptoList } from 'models/API/crypto/services/cryptoList';
import { IPageData } from 'models/types/getPageData';

const queryClient = new QueryClient();

async function getData(): Promise<IPageData> {
    await queryClient.prefetchQuery([QUERY_KEYS.cryptoList], getCryptoList);

    return { dehydratedState: dehydrate(queryClient) };
}

export const metadata = {
    title: 'Crypto Assets - Finance App',
    description: 'Track your crypto assets',
};

export default async function CryptoAssetsPage(): Promise<JSX.Element> {
    // NOTE: commented to don't waste API calls (IG)
    getData;
    // const { dehydratedState } = await getData();

    return (
        // <HydrateClient state={dehydratedState}>
        //     <CryptoAssets />
        <>Crypto Assets</>
        // </HydrateClient>
    );
}
