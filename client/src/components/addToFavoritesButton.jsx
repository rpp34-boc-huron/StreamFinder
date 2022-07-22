import * as React from 'react';
import {Box, Modal, Button, IconButton, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function addToFavorites({event}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addToFavorite} = event;
  console.log(addToFavorite)
  const actionWrapper = e => {
    handleOpen()
    addToFavorite()
  }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};
    return (
    <IconButton aria-label="share" >
      <FavoriteIcon onClick={actionWrapper} />
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              added to favorites
            </Typography>
          </Box>
        </Modal>
    </IconButton>
  )
}