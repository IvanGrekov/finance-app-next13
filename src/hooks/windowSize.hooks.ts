import { useState, useEffect } from 'react';

import { SCREEN_SIZE_NUMBERS } from 'constants/screenSizes';
import { EScreenSizeNames } from 'models/types/screenSizes';

export default function useWindowSize(): EScreenSizeNames {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const listener = (): void => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', listener);

        return (): void => {
            window.removeEventListener('resize', listener);
        };
    }, []);

    for (const screenSizeKey of Object.keys(EScreenSizeNames)) {
        const key = screenSizeKey as keyof typeof EScreenSizeNames;
        if (screenSize <= SCREEN_SIZE_NUMBERS[key]) {
            return EScreenSizeNames[key];
        }
    }

    return EScreenSizeNames.XL;
}
