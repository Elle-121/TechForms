import MainContainer from '../../components/MainContainer';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../../assets/LoginImage.jpeg"

// TODO: https://www.reddit.com/r/webdev/comments/nr9rso/how_to_validate_forms_properly_some_useful_dos/

function Login(){
    let navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate("/");

    }

    return (
        <MainContainer navVisible={false}>
        <div className="row h-100 m-0">
            <div className="col-md-3 col-lg-2"
                style={{ width: '50%',
                        borderRight: '5px solid var(--tforange-color)' }}>
                <figure className="login-figure">
                    <img src={loginImage} className="login-figure__image"
                    alt="TechFactor Interns"/>
                </figure>
            </div>

            <div className="h-100" style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '50px'}}>
                <div className="login-container">
                    <header className="login-form-header">
                        <h1 className="login-text--center login-text--bold">
                            Welcome Back to
                            <strong className="login-text--orange"> TechForms*</strong></h1>
                        <p className="login-text--center">
                            Manage all your TechFactors forms right here!</p>
                    </header>

                    <form action='' method='get' className='login-form'> {/* TODO fill in action and method attributes */}
                        <div className='form-row'>
                            <label for='username'>Username / TechFactors Email</label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"
                                className="form-row__input-text"/>
                            {/* TODO Figure out input type of Username/Email*/}
                        </div>

                        <div className='form-row'>
                            <label for='password'>Password</label>
                            <input id='password' name='password' type='password'
                                placeholder="Enter password"
                                className="form-row__input-text"/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                            <Link to="/reset-password" className="login-form__link
                            login-text--small">Forgot your password?</Link>
                        </div>

                        <div className='button-row'>
                            <button type="submit" className="button-row__button
                                button-row__button--affirm"
                                onClick={handleSubmit}>Log In</button>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>

         </MainContainer>
    );
}


export default Login
