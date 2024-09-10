import React from 'react'

const Spotify = ({type,placeholder,onClick}) => {
    const buttonStyle = {
        backgroundColor:'#1db954',
        color:'#fff',
        padding:'10px 20px',
        border:'none',
        borderRadius:'5px',
        marginTop:'20px',
        cursor:'pointer'
        };
    const inputStyle={
        width:'170px',
        height:'10px',
        padding:'10px',
        borderRadius:'5px',
        border:'none'
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




