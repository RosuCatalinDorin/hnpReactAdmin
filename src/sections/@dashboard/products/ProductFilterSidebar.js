import PropTypes from 'prop-types';
// material
import {Button, Drawer} from '@mui/material';
//
import Iconify from '../../../components/Iconify';
import FormFilters from "./FormFilters";

export const UDX_APPAREA = [
    'Holding',
    'Parting/Grooving',
    'Threading',
    'Drilling',
    'Not applicable',
    'Boring',
    'Reaming',
    'Turning',
];
export const UDX_APPAREA_DESC = [
    {value: 'Holding', label: 'Holding'},
    {value: 'Parting/Grooving', label: 'Parting/Grooving'},
    {value: 'Threading', label: 'Threading'},
    {value: 'Drilling', label: 'Drilling'},
    {value: 'Boring', label: 'Boring'},
    {value: 'Reaming', label: 'Reaming'},
    {value: 'Turning', label: 'Turning'},
    {value: 'Not applicable', label: 'Not applicable'}

];
export const UDX_ITEMTYPE = [
    'Accessory Item',
    'Adaptive Item',
    'Assembly Item',
    'Blank',
    'Brazed Cutting Tool',
    'Insert',
    'Solid Cutting Tool',
    'Tool Item',
];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
    {value: 'below', label: 'Below $25'},
    {value: 'between', label: 'Between $25 - $75'},
    {value: 'above', label: 'Above $75'}
];
export const FILTER_COLOR_OPTIONS = [
    '#00AB55',
    '#000000',
    '#FFFFFF',
    '#FFC0CB',
    '#FF4842',
    '#1890FF',
    '#94D82D',
    '#FFC107'
];

// ----------------------------------------------------------------------

ShopFilterSidebar.propTypes = {
    isOpenFilter: PropTypes.bool,
    onResetFilter: PropTypes.func,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
    formik: PropTypes.object
};

export default function ShopFilterSidebar({
                                              isOpenFilter,
                                              onResetFilter,
                                              onOpenFilter,
                                              onCloseFilter,
                                              setFilters,
                                              formik
                                          }) {

    return (
        <>
            <Button
                disableRipple
                color="inherit"
                endIcon={<Iconify icon="ic:round-filter-list"/>}
                onClick={onOpenFilter}
            >
                Filters&nbsp;
            </Button>
            <Drawer
                anchor="left"
                open={isOpenFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: {width: 280, border: 'none', overflow: 'hidden'}
                }}
            >
                <FormFilters
                    onResetFilter={onResetFilter}
                    onCloseFilter={onCloseFilter}
                    setFilters={setFilters}
                    formik={formik}
                    mobile={true}
                />

            </Drawer>

        </>
    );
}
