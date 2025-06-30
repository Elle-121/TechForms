import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';
import { Form, Row, Col } from "react-bootstrap";

// TODO: Separate Logo and NavBar

function Login(){

    return (
        <MainContainer>
        <div className="row h-100 m-0">
            {/* Left Side */}
            <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '50%', borderRight: '5px solid var(--tforange-color)' }}>

            </div>
            {/* Right Content */}
            <div className="p-4 h-100 overflow-auto" style={{width: '50%',display: 'flex',flexDirection: 'column',}}>
                <div>
                    <h1>Welcome Back to TechForms*</h1>
                    <p>Manage all your Techfactor forms right here!</p>

                    <Form.Group className="">
                        <Form.Label className="">Username/Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username or Techfactors email"/>
                    </Form.Group>
                    <Form.Group className="">
                        <Form.Label className="">Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Password"/>
                    </Form.Group>
                    <button>HIDE PASSWORD</button>

                    <a href="/reset-password">Forgot your password?</a>

                    <button class='button-affirm ms-2' >Log In</button>


                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default Login
