import Providers from 'app/providers';
import ContentWrapper from 'components/content-wrapper/ContentWrapper';
import NavigationSidebar from 'components/navigation-sidebar/NavigationSidebar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'styles/globals.scss';

export const metadata = {
    title: 'Finance App',
    description: 'Track your finances with this simple app',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <NavigationSidebar />
                    <ContentWrapper>{children}</ContentWrapper>
                </Providers>
            </body>
        </html>
    );
}
