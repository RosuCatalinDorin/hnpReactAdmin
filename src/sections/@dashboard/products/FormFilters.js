import {Form, FormikProvider} from "formik";
import {Box, Button, Divider, FormControlLabel, IconButton, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Iconify from "../../../components/Iconify";
import Scrollbar from "../../../components/Scrollbar";
import {UDX_APPAREA, UDX_APPAREA_DESC} from "./ProductFilterSidebar";

export default function FormFilters({
                                        onResetFilter,
                                        onCloseFilter,
                                        setFilters,
                                        formik,
                                        mobile = false
                                    }) {
    const {values, getFieldProps, handleChange} = formik;

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{px: 1, py: 2}}
                    >
                        <Typography variant="subtitle1" sx={{ml: 1}}>
                            Filtre
                        </Typography>
                        {mobile ? <IconButton onClick={onCloseFilter}>
                            <Iconify icon="eva:close-fill" width={20} height={20}/>
                        </IconButton> : ""}
                    </Stack>

                    <Divider/>

                    <Scrollbar>
                        <Stack spacing={3} sx={{p: 3}}>
                            {/*              <div>
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
                                                    onClick={(item) => {
                                                        setFilters(item, 'UDX_APPAREA')
                                                    }}
                                                />
                                            }
                                            label={item}
                                        />
                                    ))}
                                </FormGroup>
                            </div>*/}

                            <div>
                                <Typography variant="subtitle1" gutterBottom>
                                    Categorii
                                </Typography>
                                <RadioGroup {...getFieldProps('category')}>
                                    {UDX_APPAREA_DESC.map((item) => (
                                        <FormControlLabel key={item.value} value={item.value} control={<Radio
                                            onClick={(item) => {
                                                setFilters(item, 'UDX_APPAREA')
                                            }}
                                        />} label={item.label}/>
                                    ))}
                                </RadioGroup>
                            </div>

                            {/*                            <div>
                                <Typography variant="subtitle1" gutterBottom>
                                    Colors
                                </Typography>
                                <ColorManyPicker
                                    name="colors"
                                    colors={FILTER_COLOR_OPTIONS}
                                    onChange={handleChange}
                                    onChecked={(color) => values.colors.includes(color)}
                                    sx={{maxWidth: 38 * 4}}
                                />
                            </div>*/}

                            {/*         <div>
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
                                                    icon={<Rating readOnly value={4 - index}/>}
                                                    checkedIcon={<Rating readOnly value={4 - index}/>}
                                                />
                                            }
                                            label="& Up"
                                            sx={{
                                                my: 0.5,
                                                borderRadius: 1,
                                                '& > :first-of-type': {py: 0.5},
                                                '&:hover': {
                                                    opacity: 0.48,
                                                    '& > *': {bgcolor: 'transparent'}
                                                },
                                                ...(values.rating.includes(item) && {
                                                    bgcolor: 'background.neutral'
                                                })
                                            }}
                                        />
                                    ))}
                                </RadioGroup>
                            </div>*/}
                        </Stack>
                    </Scrollbar>

                    <Box sx={{p: 3}}>
                        <Button
                            fullWidth
                            size="large"
                            type="submit"
                            color="inherit"
                            variant="outlined"
                            onClick={onResetFilter}
                            startIcon={<Iconify icon="ic:round-clear-all"/>}
                        >
                            Reseteaza filtre
                        </Button>
                    </Box>
                </Form>
            </FormikProvider>

        </>
    );
}