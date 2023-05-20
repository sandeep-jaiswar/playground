import Link from 'next/link';
import { Grid, Column } from '@openlibrary/ui';
export const Layout = ({ children }) => {
    return (
        <Grid>
            <Column className='layout-link-section' size={2}>
                <Link href="../component/button">Button</Link>
                <Link href="../component/accordion">Accordion</Link>
                <Link href="../component/dropdown">dropdown</Link>
                <Link href="../component/textfield">Text Field</Link>
                <Link href="../component/textarea">Text Area</Link>
                <Link href="../component/checkbox">Checkbox</Link>
                <Link href="../component/radiobutton">Radio Button</Link>
                <Link href="../component/switch">Switch</Link>
                <Link href="../component/dropdown">Dropdown</Link>
                <Link href="../component/select">Select</Link>
                <Link href="../component/slider">Slider</Link>
                <Link href="../component/autocomplete">Autocomplete</Link>
                <Link href="../component/chips">Chips</Link>
                <Link href="../component/appbar">App Bar</Link>
                <Link href="../component/bottomnavigation">Bottom Navigation</Link>
                <Link href="../component/tabs">Tabs</Link>
                <Link href="../component/drawer">Drawer</Link>
                <Link href="../component/stepper">Stepper</Link>
                <Link href="../component/dropdownmenu">Dropdown Menu</Link>
                <Link href="../component/contextmenu">Context Menu</Link>
                <Link href="../component/popupmenu">Popup Menu</Link>
                <Link href="../component/tooltip">Tooltip</Link>
                <Link href="../component/dialog">Dialog</Link>
                <Link href="../component/simplemodal">Simple Modal</Link>
                <Link href="../component/fullscreenmodal">Fullscreen Modal</Link>
                <Link href="../component/bottomsheet">Bottom Sheet</Link>
                <Link href="../component/snackbar">Snackbar</Link>
                <Link href="../component/datepicker">Date Picker</Link>
                <Link href="../component/timepicker">Time Picker</Link>
                <Link href="../component/datetimepicker">DateTime Picker</Link>
                <Link href="../component/colorpicker">Color Picker</Link>
                <Link href="../component/table">Table</Link>
            </Column>
            <Column className='layout-content-section' size={10}>
                {children}
            </Column>
        </Grid>
    )
};