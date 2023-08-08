import { TCryptoList } from 'models/types/crypto';
import { formatCurrency } from 'utils/format.utils';

interface ICryptoAssetsProps {
    data: TCryptoList;
}

export default function CryptoAssets({ data }: ICryptoAssetsProps): JSX.Element {
    if (!data.length) {
        // TODO: Replace with EmptyState component
        return <p>Something went wrong</p>;
    }

    return (
        <ul>
            {data.map(({ symbol, priceUsd }) => (
                <li key={symbol}>
                    {symbol} - {formatCurrency(priceUsd)}
                </li>
            ))}
        </ul>
    );
}
