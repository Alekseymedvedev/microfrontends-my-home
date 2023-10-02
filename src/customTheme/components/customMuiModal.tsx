export const customMuiModal = {
    styleOverrides: {
        root: (({theme}: any) => ({
            "& .MuiBox-root": {
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: `100%`,
                backgroundColor: theme.palette.base.white,
                borderRadius: 8,
                padding: 24,
                outline: 'none',
            },
            '& .MuiBackdrop-root':{
                backdropFilter:`blur(5px)`
            }
        })),
    }
}