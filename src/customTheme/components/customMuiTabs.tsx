export const customMuiTabs = {
    styleOverrides: {
        root: {
            minHeight: 'initial',
            '& .MuiButtonBase-root': {
                padding: `8px 20px`,
                minHeight: 'initial',
                textTransform:'none',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: `normal`,
            },
            '& .MuiTab-root.Mui-selected': {
                color: 'var(--black-color, #000)',

            },
        },
        indicator: {
            backgroundColor: '#39B949',
        }
    }
}