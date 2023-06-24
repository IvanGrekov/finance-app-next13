'use client';

import AccountCircle from '@mui/icons-material/AccountCircle';

import IconButton from 'components/button/IconButton';

export default function AccountPopover(): JSX.Element {
    return <IconButton icon={<AccountCircle fontSize="large" />} title="Your account" />;
}
