export const customMuiButton = {
    variants:[
        {
            props: {variant: 'contained', color: 'primary'} as object,
            style: (({theme}: any) => ({
                background: theme.palette.base.main,
                color:'#000',
            }))
        }
    ],
    styleOverrides: {
        root:(({theme}: any) => ({
            padding: `9px 24px`,
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 'normal',
            letterSpacing: `-0.12px`,
            border:'none',
            borderRadius: 5,
            boxShadow: 'none',
            textTransform: 'none',
        })),
    }
}