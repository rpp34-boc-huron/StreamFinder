import * as React from 'react';
import {IconButton, Alert, Snackbar} from '@mui/material';
import Add from '@mui/icons-material/Add';

export default function addToList({event, movieID, poster}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addToList} = event;
  const { id } = movieID;
  const actionWrapper = e => {
    handleOpen()
    //sase username is hardcoded
    addToList('sase', id, poster)
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