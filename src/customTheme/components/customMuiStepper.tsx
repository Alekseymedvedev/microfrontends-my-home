import {Theme} from "@mui/material";

export const customMuiStepper = {

    styleOverrides: {
        root: (({theme}: any) => ({
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiStepLabel-root.MuiStepLabel-alternativeLabel': {
                flexDirection: 'column-reverse',
                alignItems: 'center',
            },
            '& .MuiStepLabel-root': {
                position:'relative',
            },
            '& .MuiStepLabel-label': {
                fontSize: 12,
                fontWeight: 500,
                color: theme.palette.base.black,
                lineHeight: `120%`,
            },
            '& .MuiStepLabel-labelContainer': {
                position: 'absolute',
                top: -16,
                left: 0
            },
            '& .MuiStep-root': {
                paddingTop: 20
                // flex:0
            },
            '& .MuiStepLabel-iconContainer': {
                padding:0
            },
            '& .MuiStepConnector-root': {
                position: 'relative',
            },
            '& .MuiStepConnector-line': {
                position: 'absolute',
                bottom: -10,
                width:`100%`,
                borderWidth: 1,
                borderColor: theme.palette.success.main
            },

        })),

    },
}