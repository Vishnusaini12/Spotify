import React from 'react'

const Spotify = ({type,placeholder,onClick}) => {
    const buttonStyle = {
        backgroundColor:'#1db954',
        color:'#fff',
        padding:'10px 20px',
        border:'none',
        borderRadius:'5px',
        marginTop:'20px',
        cursor:'pointer',
        width: '80%',
        maxWidth: '200px'
        };
    const inputStyle={
        width:'80%',
        maxWidth: '200px',
        height:'10px',
        padding:'10px',
        borderRadius:'5px',
        border: '1px solid #ccc',
        marginBottom: '10px'
        };   
    
return (
    <div>
    {type === 'button' ? (
        <button onClick={onClick} style={buttonStyle}>Log In</button>
    ) : (
        <input type={type} placeholder={placeholder} style={inputStyle} />
    )}
    </div>
  );
};



export default Spotify;


// import React from 'react';

// const Spotify = ({ type, placeholder, onClick }) => {
//   return (
//     <div>
//       {type === 'button' ? (
//         <button onClick={onClick} style={buttonStyle}>Log In</button>
//       ) : (
//         <input type={type} placeholder={placeholder} style={inputStyle} />
//       )}
//     </div>
//   );
// };

// export default Spotify;




