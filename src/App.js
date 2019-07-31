import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './buttonappbar/ButtonAppBar';
import SideMenu from './SideMenu';
import MainPage from './MainPage';
import Footer from './Footer';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">      
      <ButtonAppBar/>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <SideMenu/>
        </Grid>
        <Grid item xs={9}>
            <MainPage/>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
