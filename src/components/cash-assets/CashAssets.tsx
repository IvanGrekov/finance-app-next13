import { IExchangeRatesData } from 'models/types/exchangeRates';
import { formatCurrency } from 'utils/format.utils';

interface ICashAssetsProps {
    data: IExchangeRatesData;
}

export default function CashAssets({ data }: ICashAssetsProps): JSX.Element {
    const assets = Object.values(data);

    if (!assets.length) {
        // TODO: Replace with EmptyState component
        return <p>Something went wrong</p>;
    }

    return (
        <ul>
            {assets.map(({ code, value }) => (
                <li key={code}>
                    {code} - {formatCurrency(value)}
                </li>
            ))}
        </ul>
    );
}
