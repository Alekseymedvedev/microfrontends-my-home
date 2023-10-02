export const customMuiInputBase = {

    styleOverrides: {
        root: (({theme}: any) => ({
            '& .MuiOutlinedInput-notchedOutline': {
                 border: 'none'
            },
            '&.MuiInputBase-sizeSmall': {
              backgroundColor: theme.palette.base.white,
            },
        })),
        input: (({theme}: any) => ({
            '&.MuiInputBase-inputSizeSmall': {
                padding: `4px 8px`,
                fontSize: 12,
                fontWeight: 400,
                lineHeight: `120%`,
                backgroundColor: theme.palette.base.white,
            }
        }))
    },
}