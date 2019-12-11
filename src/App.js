import React from 'react';
import './App.css';
import Carlist from './components/Carlist';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6" >
            Carshop
          </Typography>
        </ToolBar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
