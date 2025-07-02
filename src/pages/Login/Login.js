import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';

// TODO: Separate Logo and NavBar
// TODO: https://www.reddit.com/r/webdev/comments/nr9rso/how_to_validate_forms_properly_some_useful_dos/

function Login(){

    const resetPassword = async () => {
        window.location.href = "/reset-password";
    }

    return (
        <MainContainer>
        {/* TODO Modify Header to remove navbar portion  */}
        <div className="row h-100 m-0">
            {/* Left Side */}
            <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '50%', borderRight: '5px solid var(--tforange-color)' }}>

            </div>
            {/* Right Content */}
            <div className="p-4 h-100 overflow-auto" style={{width: '50%',display: 'flex',flexDirection: 'column',}}>
                <div className="login-form-container">
                    <header className="login-form-header">
                        <h1>Welcome Back to <strong>TechForms*</strong></h1>
                        <p><em>Manage all your TechFactors forms right here!</em></p>
                    </header>

                    <form action='' method='get' className='login-form'> {/* TODO fill in action and method attributes */}
                        <div className='form-row'>
                            <label for='username'>Username/TechFactors Email</label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"/>
                            {/* TODO Figure out input type of Username/Email*/}
                        </div>

                        <div className='form-row'>
                            <label for='password'>Password</label>
                            <input id='password' name='password' type='password'
                                placeholder="Enter password"/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                            <a onClick={resetPassword} href="">Forgot your password?</a>
                            {/* TODO Route to Reset Password*/}
                        </div>

                        <div className='form-row'>
                            <button type="submit" className="button-affirm">Log In</button>
                        </div>

                        
                    </form>

                    {/*
                    <Form.Group className="">
                        <Form.Label className="">Username/Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username or TechFactors email"/>
                    </Form.Group>
                    <Form.Group className="">
                        <Form.Label className="">Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Password"/>
                    </Form.Group>
                    <button>HIDE PASSWORD</button>

                    <a href="/reset-password">Forgot your password?</a>

                    <button class='button-affirm ms-2' >Log In</button>
                    */}

                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default Login
