import CashAssets from 'components/cash-assets/CashAssets';
// import { getExchangeRates } from 'models/API/exchange-rates/services';

export const metadata = {
    title: 'Cash Assets - Finance App',
    description: 'Track your cash assets',
};

export default async function CashAssetsPage(): Promise<JSX.Element> {
    // NOTE: commented to don't waste API calls (IG)
    // const data = await getExchangeRates({ revalidate: 43200 });

    return <CashAssets data={{}} />;
}
