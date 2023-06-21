'use client';

import { usePageLoading } from 'models/contexts/PageLoading';

export default function PageLoadingIndicator(): JSX.Element | null {
    const { isLoading } = usePageLoading();

    //<LinearProgress sx={{ opacity: isLoading ? 1 : 0 }} />
    return isLoading ? <>Loading...</> : null;
}
