import * as React from 'react';
import {IconButton, Alert, Snackbar} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function addToFavorites({event, movieID, poster, favorited}) {
  const [open, setOpen] = React.useState(false);
  const [showBanner, setBanner] =React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addToFavorites } = event;
  const { id } = movieID;
  const actionWrapper = e => {
    //pass in userID and movieID
    addToFavorites('sase', id, poster)
      .then((responseCode) => {
        console.log(responseCode)
        if(responseCode.data === 'removed') {
          setBanner(true)
          handleOpen()
        } else {
          setBanner(false)
          handleOpen()
        }
      })
  }
  const buttonSides = 64;
  const heartFillColor = favorited ? 'red' : 'gray';
    return (
      <IconButton
      aria-label="add"
      variant="contained"
      sx={{
        minWidth: 25,
        height: 30,
        borderRadius: 1,
        // border: "1px solid",
        // borderColor: "primary.main",
        // backgroundColor: '#edeff2',
        "& .MuiButton-startIcon": { margin: 0 }}
      }
      >
      <FavoriteIcon onClick={actionWrapper} style={{ fill: heartFillColor }}/>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'bottom'}} sx={{ height: "100%", opacity: "transparent" }}>
        {showBanner ? <Alert onClose={()=>{
              setOpen(false)
              setBanner(null)
            }} severity="info">
              Removed from Favorites!
            </Alert> : <Alert onClose={()=>{
              setOpen(false)
              setBanner(null)
            }} severity="success">
              Added to Favorites!
            </Alert>}

      </Snackbar>
    </IconButton>
  )
}