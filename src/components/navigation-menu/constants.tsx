import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import SavingsIcon from '@mui/icons-material/Savings';

import { INavItem } from 'components/navigation-menu/types';

export const NAV_ITEMS: INavItem[] = [
    {
        text: 'Assets',
        link: '/assets',
        icon: <AccountBalanceWalletIcon />,
    },
    {
        text: 'Deposits',
        link: '/deposits',
        icon: <SavingsIcon />,
    },
    {
        text: 'Loans',
        link: '/loans',
        icon: <PaymentsIcon />,
    },
];
