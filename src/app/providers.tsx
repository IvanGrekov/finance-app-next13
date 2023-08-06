'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
    const [client] = useState(new QueryClient());

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}