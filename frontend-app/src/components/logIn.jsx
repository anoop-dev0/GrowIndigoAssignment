import { useEffect } from "react";
import server from '../server';

function Login(props) {

    useEffect(()=>{
        if(!props.location.state){
            props.history.push('/auth');
        }
        else{
            server
            .post('/validate',{mobile:props.location.state.mobile})
            .then(isRegistered=>{
                if (isRegistered.success) {
                    alert("Registered Successfully");
                }
                else{
                    alert("Registration Failed");
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    },[]);
    
    

    return (
        <>
           
            {/* <Modal showModal={message}/> */}
        </>
    )
}

export default Login; 