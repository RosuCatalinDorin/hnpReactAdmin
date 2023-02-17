import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    borderRadius: '50px 20px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
};

export default function BasicModal(props) {
    const {isOpen, setOpenModal, title} = props;
    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{mb: 2}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                    </Box>
                    <Box>
                        {props.children}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
