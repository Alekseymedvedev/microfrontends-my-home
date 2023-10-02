import {createTheme} from "@mui/material/styles";
import {customMuiPaper} from "./components/customMuiPaper";
import {customMuiContainer} from "./components/customMuiContainer";
import {customMuiButton} from "./components/customMuiButton";
import {customMuiButtonBase} from "./components/customMuiButtonBase";
import {customMuiInputBase} from "./components/customMuiInputBase";
import {customMuiTabs} from "./components/customMuiTabs";
import {customMuiTooltip} from "./components/customMuiTooltip";
import {customMuiSelect} from "./components/customMuiSelect";
import {customMuiDivider} from "./components/customMuiDivider";
import {customMuiBadge} from "./components/customMuiBadge";
import {customMuiChip} from "./components/customMuiChip";
import {customMuiTable} from "./components/customMuiTable";
import {customMuiPaginationItem} from "./components/customMuiPaginationItem";
import {customMuiModal} from "./components/customMuiModal";
import {customMuiBreadcrumbs} from "./components/customMuiBreadcrumbs";
import {customMuiSwitch} from "./components/customMuiSwitch";
import {customMuiFormControlLabel} from "./components/customMuiFormControlLabel";
import {customMuiRadio} from "./components/customMuiRadio";
import {customMuiStepper} from "./components/customMuiStepper";
import {customMuiCheckbox} from "./components/customMuiCheckbox";

export const darkTheme = createTheme({
    spacing: 4,
    palette: {
        base: {
            white: '#FFFFFF',
            white50: `rgba(255, 255, 255, 0.5)`,
            black: '#24272d',
            black50: `rgba(36, 39, 45, 0.5)`,
            main: `linear-gradient(165deg, #F9FFFA 0%, #C8E8CC 100%)`,
        },
        // primary:{
        //   // main:`linear-gradient(165deg, #F9FFFA 0%, #C8E8CC 100%)`,
        // },
        secondary: {
            main: '#D2D2D2',
        },
        success: {
            light:'#EEE',
            main: '#39B848',
        },
        error: {
            main: '#FF4F4F',
            dark: '#F97D37',
        },
        warning: {
            main: '#FF9922',
            dark: '#F97D37',
        },
        info: {
            light: '#97B1DF',
            main: '#4472C4',
        },
        neutral: {
            light: '#F7F8FA',
            main: '#EDEDED',
            dark: '#D2D2D2',
            contrastText: '#939393'
        },
        border: {
            main: '#EFF3FA',
            dark: '#596272',
        },
    },

    // breakpoints: {
    //     values: {
    //     },
    // },

    typography: {
        fontFamily: 'Rubik, sans-serif',
        body1: {
            // исправить на color:theme.palette.base.main
            color: `#24272D`
        },
        h1: {},
        h2: {},
        h3: {},
        subtitle1: {},
        subtitle2: {},
        button: {},
        caption: {},
    },
    components: {
        MuiContainer: customMuiContainer,
        MuiPaper: customMuiPaper,
        MuiButton: customMuiButton,
        MuiListItemIcon: customMuiButtonBase,
        MuiInputBase: customMuiInputBase,
        MuiTabs: customMuiTabs,
        MuiTooltip: customMuiTooltip,
        MuiSelect: customMuiSelect,
        MuiDivider: customMuiDivider,
        MuiBadge: customMuiBadge,
        MuiChip: customMuiChip,
        MuiTableContainer: customMuiTable.MuiTableContainer,
        MuiTableHead: customMuiTable.MuiTableHead,
        MuiTableCell: customMuiTable.MuiTableCell,
        MuiTableRow: customMuiTable.MuiTableRow,
        MuiPaginationItem: customMuiPaginationItem,
        MuiModal: customMuiModal,
        MuiBreadcrumbs: customMuiBreadcrumbs,
        MuiSwitch: customMuiSwitch,
        MuiFormControlLabel: customMuiFormControlLabel,
        MuiRadio: customMuiRadio,
        MuiStepper: customMuiStepper,
        MuiCheckbox: customMuiCheckbox,
    },
});
