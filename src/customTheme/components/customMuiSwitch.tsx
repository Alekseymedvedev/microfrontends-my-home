import {Theme} from "@mui/material";

export const customMuiSwitch = {
    styleOverrides: {
        root: (({theme}: any) => ({
            width: 36,
            height: 20,
            padding: 0,
            display: 'flex',
            '&:active': {
                '& .MuiSwitch-thumb': {
                    width: 15,
                },
                '& .MuiSwitch-switchBase.Mui-checked': {
                    transform: 'translateX(9px)',
                },
            },
            '& .MuiSwitch-switchBase': {
                padding: 2,
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        opacity: 1,
                        backgroundColor: theme.palette.success.main,
                    },
                },
            },
            '& .MuiSwitch-thumb': {
                boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
                width: 15,
                height: 15,
                borderRadius: `50%`,
                transition: theme.transitions.create(['width'], {
                    duration: 200,
                }),
            },
            '& .MuiSwitch-track': {
                borderRadius: 16,
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            },
        })),

    },

}