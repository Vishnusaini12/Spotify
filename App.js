import React from 'react';
import Spotify from './spotify'; 
import logo from './assets/download.png'; 

function App() {
  const Submit = () => {
    console.log('Log In clicked');
  };
 
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'grey',
      width:'90%',
      maxWidth: '350px',
      height:'480px',
      margin:'auto',
      textAlign:'center',
      borderRadius:'7px',
      marginTop:'40px',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <img style={{
        height:'auto',
        width:'80%',
        maxWidth: '250px',
        margin: '20px auto',
        borderRadius:'7px'
        }} src={logo} alt='spotify logo'></img>
      <h2>Music for everyone</h2>
      <Spotify type='text' placeholder='Email or Username' /> <br></br>
      <Spotify type='password' placeholder='Password' />
      <Spotify type='button' onClick={Submit}></Spotify>

    </div>
  );
}

export default App;
