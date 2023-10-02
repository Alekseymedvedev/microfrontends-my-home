import {Theme} from "@mui/material";


declare module '@mui/material/styles' {
    interface Palette {
        base?: {
            white:string
            white50: string
            black: string
            black50: string
        };
        neutral: Palette['primary'] ;
        border: Palette['primary'] ;
    }
    interface PaletteOptions {
        base?: {
            white:string
            white50: string
            black: string
            black50: string
            main:string
        };
        neutral?: PaletteOptions['primary'];
        border?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        neutral: true;
    }
}