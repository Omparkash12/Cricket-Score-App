import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getMatchDetails } from './Api'

const MyCard = (props) => {

  const [details, setDetails] = useState({});

  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    // alert(id);
    getMatchDetails(id)
      .then((data) => {
        console.log('getMatchDetails', data)
        setDetails(data)
      })
      .catch((error) => console.log('Error', error))
    handleOpen();
  }


  const getMatchCard = () => {
    // return 'My Card'
    return (
      <Card style={{ marginBottom: '1.5rem' }}>
        <CardContent>
          {/* <Typography variant='h5'>My Card</Typography> */}
          <Grid container justifyContent='center' alignItems='center' gap='16px'>
            <Grid item sm='4' >
              <Typography variant='h5'>{props.first}</Typography>
            </Grid>
            <Grid item sm='1' >
              <Typography>
                <img style={{ width: '85px', height: 'auto' }} src={require('../Images/cricket-score-vs-img.png')} alt='' />
              </Typography>
            </Grid>
            <Grid item sm='4' >
              <Typography variant='h5'>
                {props.second}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent='center' gap='16px'>
            <Button variant="contained" color='primary'
              onClick={() => {
                handleClick(props.id);
              }}>
              Show Details
            </Button>
            <Button variant="contained" color='primary'>
              Start Time : {new Date(props.date).toString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    )
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  const getDialog = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='alert-dialog-title'>{'Match Detals..'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Typography>{'Demo1'}</Typography>
            <Typography>
              Match Teams
              <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}> {props.name}</span>
            </Typography>
            <Typography>Cricket Venue
              <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}> {props.venue}</span>
            </Typography>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }


  return (
  <>
    {getMatchCard()}
    {getDialog()}
  </>
  )
  

}

export default MyCard;
