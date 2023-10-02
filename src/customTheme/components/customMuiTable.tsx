export const customMuiTable = {
    MuiTable: {
        styleOverrides: {
            root: (({theme}: any) => ({
                backgroundColor: theme.palette.neutral.light
            }))
        }
    },
    MuiTableContainer: {
        styleOverrides: {
            root: {
                border: `none`,
            }
        }
    },
    MuiTableHead: {
        styleOverrides: {
            root: (({theme}: any) => ({
                backgroundColor: theme.palette.neutral.light
            }))
        }
    },

    MuiTableCell: {
        styleOverrides: {
            root: (({theme}: any) => ({
                lineHeight: `16px`,
                borderRight: ` 0.5px solid`,
                borderColor: theme.palette.neutral.dark,
                '&.MuiTableCell-body.MuiTableCell-sizeMedium':{
                    borderRight: ` 0.5px solid`,
                    borderColor: theme.palette.neutral.dark,
                    borderBottom:'none'
                },
                '&.MuiTableCell-body.MuiTableCell-sizeMedium:last-child': {
                    borderRight: `none`,
                },
            }))
        }
    },
    MuiTableRow: {
        styleOverrides: {
            root: (({theme}: any) => ({
                borderBottom: ` 0.5px solid`,
                borderColor: theme.palette.neutral.dark,
                ' &:last-child': {
                    borderRight: `none`,
                },

                '& td, & th': {
                    padding: `4px 8px`,
                },
            }))
        }
    },
}