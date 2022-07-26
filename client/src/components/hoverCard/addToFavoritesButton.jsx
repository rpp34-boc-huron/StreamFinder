import * as React from 'react';
import {IconButton, Alert, Snackbar} from '@mui/material';
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
  const buttonSides = 64;

    return (
      // <Button sx={{minWidth:50, maxWidth:60, backgroundColor: 'grey'}}>
    <IconButton
      aria-label="favorites"
      variant="contained"
      sx={{
        minWidth: 60,
        height: 60,
        borderRadius: 1,
        // border: "1px solid",
        // borderColor: "primary.main",
        backgroundColor: '#edeff2',
        "& .MuiButton-startIcon": { margin: 0 }
      }}>
      <FavoriteIcon onClick={actionWrapper} />
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="success">
            Added to Favorites!
        </Alert>
      </Snackbar>
    </IconButton>
    // </Button>
  )
}