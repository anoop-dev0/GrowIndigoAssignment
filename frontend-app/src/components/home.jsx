import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Login() {
    return (
        <>
            <Link to={{
                        pathname:"/auth",
                        state:{
                            uri:'/login'
                        }
                        }} >
                <Button variant="primary" size="lg" block>
                    Sign In
                </Button>
            </Link>
            <Link to={{
                    pathname:"/auth",
                    state:{
                        uri:'/register'
                    }
                    }}>
                <Button variant="primary" size="lg" block>
                    Sign Up
                </Button>
            </Link>
        </>
    )
}
export default Login;