import {Theme} from "@mui/material";

export const customMuiBadge = {
    variant:[
        {
            props: { color: 'secondary'} as object,
            styleOverrides: ((theme: Theme) => ({
                badge:{
                    backgroundColor:theme.palette.neutral.dark
                }
            }))
        }
    ],
    styleOverrides: {

    },
}