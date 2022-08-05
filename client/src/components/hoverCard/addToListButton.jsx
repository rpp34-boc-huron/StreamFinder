import * as React from 'react';
import {IconButton, Alert, Snackbar} from '@mui/material';
import ButtonAlert from './buttonAlert';
import Add from '@mui/icons-material/Add';

export default function addToList({event, movieID, poster}) {
  const [open, setOpen] = React.useState(false);
  const [showBanner, setBanner] =React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addToList} = event;
  const { id } = movieID;

  const actionWrapper = e => {
    console.log(showBanner)
    // sase username is hardcoded
    addToList('sase', id, poster)
      .then((responseCode) => {
        if(responseCode.data === 'removed') {
          setBanner(true)
          handleOpen()
        } else {
          setBanner(false)
          handleOpen()
        }
      })

  }



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
          <Add onClick={actionWrapper} />
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'bottom'}} sx={{ height: "100%", opacity: "transparent" }}>
            {showBanner ? <Alert onClose={()=>{
              setOpen(false)
              setBanner(null)
            }} severity="info">
              Removed from Watch List!
            </Alert> : <Alert onClose={()=>{
              setOpen(false)
              setBanner(null)
            }} severity="success">
              Added to Watch List!
            </Alert>}
          </Snackbar>
        </IconButton>
  )
}