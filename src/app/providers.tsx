'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { MobileNavigationSidebarProvider } from 'models/contexts/MobileNavigationSidebar';
import { NotificationsProvider } from 'models/contexts/Notifications';
import { PageLoadingProvider } from 'models/contexts/PageLoading';

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            <MobileNavigationSidebarProvider>
                <NotificationsProvider>
                    <PageLoadingProvider>{children}</PageLoadingProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </NotificationsProvider>
            </MobileNavigationSidebarProvider>
        </QueryClientProvider>
    );
}
