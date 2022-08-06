import * as React from 'react';
import {IconButton, Alert, Snackbar} from '@mui/material';
import Add from '@mui/icons-material/Add';

export default function addToList({event, movieID, poster, toBeWatched}) {
  const [open, setOpen] = React.useState(false);
  const [showBanner, setBanner] =React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addToList} = event;
  const { id } = movieID;

  const actionWrapper = e => {
    // sase username is hardcoded
    const user = JSON.parse(sessionStorage.getItem('userInfo'))


    addToList(user.username, id, poster)
      .then((responseCode) => {
        if(responseCode.data === 'removed') {
          handleOpen()
          setBanner(true)
        } else {
          setBanner(false)
          handleOpen()
        }
      })
  }

const closeAction = action => {
  setBanner(false)
  handleClose()
}
  const plusSignFillColor = toBeWatched ? 'blue' : 'gray';

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
          <Add onClick={actionWrapper} style={{ fill: plusSignFillColor }}/>
            <Snackbar open={open} autoHideDuration={5} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'bottom'}} sx={{ height: "100%", opacity: "transparent" }}>
            {showBanner ? <Alert severity="info">
              Removed from Watch List!
            </Alert> : <Alert severity="success">
              Added to Watch List!
            </Alert>}
          </Snackbar>
        </IconButton>
  )
}