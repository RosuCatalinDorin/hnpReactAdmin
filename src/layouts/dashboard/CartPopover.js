import PropTypes from 'prop-types';
import {useRef, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
// material
import {alpha} from '@mui/material/styles';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Typography
} from '@mui/material';
// utils
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import MenuPopover from '../../components/MenuPopover';
import {useSelector} from "react-redux";

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
    item: PropTypes.object.isRequired
};

function NotificationItem({item}) {

    const title = item._source.ARTICLE_DETAILS.DESCRIPTION_SHORT
    const avatar = item._source.MIME_INFO.MIME[0].MIME_SOURCE;

    return (
        <ListItemButton
            to={'/detaliiProdus/' + title.replace('/', '-') + '/' + item['_id']}
            disableGutters
            component={RouterLink}
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',

            }}
        >
            <ListItemAvatar>
                <Avatar sx={{bgcolor: 'background.neutral'}}>
                    <img alt={title} src={process.env.PUBLIC_URL + '/static/hnp-catalog' + avatar}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled'
                        }}
                    >
                        <Iconify icon="fluent-mdl2:quantity" sx={{mr: 0.5, width: 16, height: 16}}/>
                        <b>{item.quantity + " x"}</b>
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

export default function CartPopover() {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const cartItems = useSelector(state => state.cart);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                size="large"

                color={open ? 'primary' : 'default'}
                onClick={handleOpen}
                sx={{
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                    })
                }}
            >
                <Badge badgeContent={cartItems.length} color="error">
                    <Iconify icon="ic:twotone-shopping-cart" width={20} height={20}/>
                </Badge>
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{width: 360}}
            >
                <Divider/>

                <Scrollbar sx={{height: {xs: 340, sm: 'auto'}}}>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, mt: 2, typography: 'overline'}}>
                                Cosul meu
                            </ListSubheader>
                        }
                    >
                        {cartItems.map((product) => (
                            <NotificationItem key={product['_id']} item={product}/>
                        ))}
                    </List>

                </Scrollbar>

                <Divider/>

                <Box sx={{p: 1}}>
                    <Button fullWidth disableRipple component={RouterLink} onClick={() => setOpen(false)}
                            to="/dashboard/cartDetails">
                        Vezi detalii cos
                    </Button>
                </Box>
            </MenuPopover>
        </>
    );
}
