// import { Button } from '@mui/material';
import './App.css';
import MyCard from './Components/MyCard';
import Navbar from './Components/Navbar';
import { getMatches } from './Components/Api';
import { Fragment, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      // .then((data) => console.log('DATA',data))
      .then((data) => {
        setMatches(data.data);
        console.log(data.data);
      })
      .catch((error) => alert("Data could not load"))
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Typography style={{ margin: '1.5rem 0' }} variant='h4'>Welcome To My Live Score App</Typography>
      {/* <h1 className=''>Welcome To My Live Score App</h1> */}
      {/* <Button variant='outlined' color="primary">Secondary</Button> */}
      <Grid container>
        <Grid sm='2'></Grid>
        <Grid sm='8'>
          {
            matches.map((match) => (
              <>
                {match.matchType === 't20' ? (<MyCard name={match.name} venue={match.venue} id={match.id} key={match.id} first={match.teams[0]} second={match.teams[1]} date={match.dateTimeGMT
                } />) : ''}
              </>
            ))
          }
        </Grid>
        <Grid sm='2'></Grid>
      </Grid>

      <MyCard />


    </div>
  );
}

export default App;
