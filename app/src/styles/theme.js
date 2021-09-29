import { createTheme } from '@mui/material';

import fonts from './fonts.css';

export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                ${fonts}
            `,
        },
    },
});