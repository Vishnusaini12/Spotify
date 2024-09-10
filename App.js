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
      width:'350px',
      height:'480px',
      margin:'auto',
      textAlign:'center',
      borderRadius:'7px',
      marginTop:'40px',

    }}>
      <img style={{
        height:'200px',
        width:'250px',
        marginTop:'40px',
        marginLeft:'50px',
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
