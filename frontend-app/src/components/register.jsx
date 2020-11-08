import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import server from '../server';


function Register(props) {

    useEffect(()=>{
        if(!props.location.state){
            props.history.push('/auth');
        }
    },[]);

    const [register, setRegister] = useState({
        name:"",
        email:"",
        city:"",
        mobile: props.location.state?props.location.state.mobile:''
    });

    const onInputChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (register.name && register.email && register.city) {
            server.post('/users', register).then(insertResponse => {
                if (insertResponse.success) {
                    alert("Registered Successfully");
                    props.history.push('/login');
                }
                else{
                    alert("Registration Unsuccessfull");
                }
            })
        }
        else {

        }
    }
    return (
        <>
            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" onChange={onInputChange} required />
                </Form.Group>
                <Form.Group controlId="Email-id">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="text" placeholder="Enter username" onChange={onInputChange} required />
                </Form.Group>
                <Form.Group controlId="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" type="text" placeholder="City" onChange={onInputChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
            </Button>
            </Form>
            {/* <Modal showModal={message}/> */}
        </>
    )
}

export default Register; 