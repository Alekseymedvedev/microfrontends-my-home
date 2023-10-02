import {themeColors} from "../themeColors";

export const customMuiTooltip = {
    styleOverrides: {
        tooltip: {
            padding:12,
            color: `#141313`,
            fontSize: 13,
            fontWeight: 400,
            backgroundColor: themeColors.green
        },
        arrow:{
            color:themeColors.green,
            bottom: `-1px`
        }
    },
}