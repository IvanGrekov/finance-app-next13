'use client';

import AssetsTabs from 'components/assets-tabs/AssetsTabs';
import { useIsCrypto } from 'hooks/assetsType.hooks';

export default function AssetsPageContent(): JSX.Element {
    const isCrypto = useIsCrypto();

    return (
        <>
            <AssetsTabs />
            <h1>Assets - {isCrypto ? 'Crypto View' : 'Assets View'}</h1>
        </>
    );
}
