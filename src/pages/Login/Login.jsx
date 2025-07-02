import MainContainer from '../../components/MainContainer';
import { Link } from 'react-router-dom';

// TODO: Separate Logo and NavBar
// TODO: https://www.reddit.com/r/webdev/comments/nr9rso/how_to_validate_forms_properly_some_useful_dos/

function Login(){

    return (
        <MainContainer>
        {/* TODO Modify Header to remove navbar portion  */}
        <Link to="/nothing">Test Error Page</Link>
        <div className="row h-100 m-0">
            <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '50%', borderRight: '5px solid var(--tforange-color)' }}>

            </div>

            <div className="p-4 h-100 overflow-auto" style={{width: '50%',display: 'flex',flexDirection: 'column',}}>
                <div className="login-form-container">
                    <header className="login-form-header">
                        <h1>Welcome Back to <strong>TechForms*</strong></h1>
                        <p><em>Manage all your TechFactors forms right here!</em></p>
                    </header>

                    <form action='' method='get' className='login-form'> {/* TODO fill in action and method attributes */}
                        <div className='form-row'>
                            <label for='username'>Username / TechFactors Email</label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"/>
                            {/* TODO Figure out input type of Username/Email*/}
                        </div>

                        <div className='form-row'>
                            <label for='password'>Password</label>
                            <input id='password' name='password' type='password'
                                placeholder="Enter password"/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                            <Link to="/reset-password">Forgot your password?</Link>
                        </div>

                        <div className='form-row'>
                            <button type="submit" className="button-affirm">Log In</button>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>

         </MainContainer>
    );
}


export default Login
