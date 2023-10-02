
export const customMuiBreadcrumbs = {

    styleOverrides: {
        root: (({theme}: any) => ({
            fontSize: 12,
            fontWeight: 400,
            lineHeight: `120%`,
            '& span':{
                color:theme.palette.base.black
            }
        })),
        separator:{
            margin:4
        }
    },
}