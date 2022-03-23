

import React , { useState }from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {useNavigate} from 'react-router-dom';
import "./styles.css";


const L=()=>{
   
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#2874f0'}
    const btnstyle={margin:'8px 0'}
    const navigate= useNavigate();


const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

//   const handleClick=()=>{


//     navigate('/home');
//     }
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // setIsSubmitted(true);
        
    navigate('/home');
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

// const handleClick=()=>{
//     // if(admine.email==userEmail && admine.password==userPassword){

//     navigate('/home');
//     }
//     else{
//      window.alert(userEmail);   
//     }
// }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <div className="form">
      <form onSubmit={handleSubmit}>
<div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
         </div>
         <div className="input-container">
                      <label>Password </label>
         <input type="password" name="pass" required />
           {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
           <input type="submit" />
         </div>     
    
       </form>
       </div>
       
            </Paper>
        </Grid>
    )
}

export default L;