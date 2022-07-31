import * as React from 'react';
import {IconButton, Alert, Snackbar} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function addToFavorites({event, movieID}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addToFavorites } = event;
  const { id } = movieID;
  const actionWrapper = e => {
    handleOpen()
    //pass in userID and movieID
    addToFavorites('1234', id)
  }
  const buttonSides = 64;

    return (
    <IconButton
      aria-label="favorites"
      variant="contained"
      sx={{
        minWidth: 25,
        height: 30,
        borderRadius: 1,
        // border: "1px solid",
        // borderColor: "primary.main",
        // backgroundColor: '#edeff2',
        "& .MuiButton-startIcon": { margin: 0 }
      }}>
      <FavoriteIcon onClick={actionWrapper} />
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="success">
            Added to Favorites!
        </Alert>
      </Snackbar>
    </IconButton>
  )
}