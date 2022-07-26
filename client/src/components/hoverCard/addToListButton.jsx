import * as React from 'react';
import {IconButton, Alert, Snackbar, Button} from '@mui/material';
import Add from '@mui/icons-material/Add';

export default function addToList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addToFavorite} = event;
  console.log(addToFavorite)
  const actionWrapper = e => {
    handleOpen()
    // addToFavorite()
  }

    return (
        <IconButton
          aria-label="add"
          variant="contained"
          sx={{
            minWidth: 60,
            height: 60,
            borderRadius: 1,
            // border: "1px solid",
            // borderColor: "primary.main",
            backgroundColor: '#edeff2',
            "& .MuiButton-startIcon": { margin: 0 }}}
          >
          <Add onClick={actionWrapper} />
          <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity="success">
                Added to watch list!
            </Alert>
          </Snackbar>
        </IconButton>
  )
}