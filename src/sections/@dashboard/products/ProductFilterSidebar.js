import PropTypes from 'prop-types';
import { Form, FormikProvider } from 'formik';
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
//
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import ColorManyPicker from '../../../components/ColorManyPicker';

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
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' }
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
  const { values, getFieldProps, handleChange } = formik;

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 280, border: 'none', overflow: 'hidden' }
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                Filters
              </Typography>
              <IconButton onClick={onCloseFilter}>
                <Iconify icon="eva:close-fill" width={20} height={20} />
              </IconButton>
            </Stack>

            <Divider />

            <Scrollbar>
              <Stack spacing={3} sx={{ p: 3 }}>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Gender
                  </Typography>
                  <FormGroup>
                    {UDX_APPAREA.map((item) => (
                      <FormControlLabel
                        key={item}
                        control={
                          <Checkbox
                            {...getFieldProps('gender')}
                            value={item}
                            checked={values.gender.includes(item)}
                            onClick={(item) =>{setFilters(item,'UDX_APPAREA')}}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Category
                  </Typography>
                  <RadioGroup {...getFieldProps('category')}>
                    {UDX_ITEMTYPE.map((item) => (
                      <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Colors
                  </Typography>
                  <ColorManyPicker
                    name="colors"
                    colors={FILTER_COLOR_OPTIONS}
                    onChange={handleChange}
                    onChecked={(color) => values.colors.includes(color)}
                    sx={{ maxWidth: 38 * 4 }}
                  />
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Price
                  </Typography>
                  <RadioGroup {...getFieldProps('priceRange')}>
                    {FILTER_PRICE_OPTIONS.map((item) => (
                      <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Rating
                  </Typography>
                  <RadioGroup {...getFieldProps('rating')}>
                    {FILTER_RATING_OPTIONS.map((item, index) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={
                          <Radio
                            disableRipple
                            color="default"
                            icon={<Rating readOnly value={4 - index} />}
                            checkedIcon={<Rating readOnly value={4 - index} />}
                          />
                        }
                        label="& Up"
                        sx={{
                          my: 0.5,
                          borderRadius: 1,
                          '& > :first-of-type': { py: 0.5 },
                          '&:hover': {
                            opacity: 0.48,
                            '& > *': { bgcolor: 'transparent' }
                          },
                          ...(values.rating.includes(item) && {
                            bgcolor: 'background.neutral'
                          })
                        }}
                      />
                    ))}
                  </RadioGroup>
                </div>
              </Stack>
            </Scrollbar>

            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={onResetFilter}
                startIcon={<Iconify icon="ic:round-clear-all" />}
              >
                Clear All
              </Button>
            </Box>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
