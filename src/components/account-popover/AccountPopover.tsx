'use client';

// TODO: Replace Icon and remove "'use client';"
import AccountCircle from '@mui/icons-material/AccountCircle';

import IconButton from 'components/button/IconButton';

interface IAccountPopoverProps {
    className?: string;
}

export default function AccountPopover({ className }: IAccountPopoverProps): JSX.Element {
    return (
        <IconButton
            icon={<AccountCircle fontSize="large" />}
            title="Your account"
            className={className}
        />
    );
}
