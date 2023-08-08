import CryptoAssets from 'components/crypto-assets/CryptoAssets';
// import { getCryptoList } from 'models/API/crypto/services/cryptoList';

export const metadata = {
    title: 'Crypto Assets - Finance App',
    description: 'Track your crypto assets',
};

export default async function CryptoAssetsPage(): Promise<JSX.Element> {
    // const data = await getCryptoList({ revalidate: 300 });

    return <CryptoAssets data={[]} />;
}
