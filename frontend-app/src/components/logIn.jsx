import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import server from '../server';

function Login(props) {

    const [message,setMessage] = useState('Waiting for response');
    useEffect(()=>{
        if(!props.location.state){
            props.history.push('/auth');
        }
        else{
            server
            .post('/validate',{mobile:props.location.state.mobile})
            .then(isRegistered=>{
                if (isRegistered.success) {
                    setMessage("User logged in")
                }
                else{
                    setMessage("User not logged in")
                }
            }).catch((err)=>{
                setMessage("User not logged in")
                console.log(err);
            })
        }
    },[]);
    
    

    return (
        <>
           
            <p>{message}</p>
            <Link to="/register" >Sign Up</Link>
        </>
    )
}

export default Login; 