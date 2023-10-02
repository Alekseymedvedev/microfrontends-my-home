import {Theme} from "@mui/material";

export const customMuiChip = {
    variants: [
        {
            props: {variant: 'filled', color: 'success'} as object,
            style: (({theme}: any) => ({
                background: theme.palette.base.main,
                '& .MuiChip-icon': {
                    backgroundColor: theme.palette.base?.white,
                }
            }))
        }
    ],
    styleOverrides: {
        root: (({theme}: any) => ({
            padding: `0px 4px 0px 8px`,
            flexDirection: 'row-reverse',
            color: theme.palette.base?.black,
        })),
        label: {
            padding: 0,
            paddingRight: 8
        },
        icon: (({theme}: any) => ({
            width: 24,
            height: 24,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 0,
            marginRight: 2,
            borderRadius: `50%`,
            backgroundColor: theme.palette.base?.white50,
            fontSize: 12
        }))
    },
}