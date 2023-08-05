import AssetsTabs from 'components/assets-tabs/AssetsTabs';

export default function AssetsLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <AssetsTabs />
            {children}
        </>
    );
}
