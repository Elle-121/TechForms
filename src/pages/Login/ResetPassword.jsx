import MainContainer from '../../components/MainContainer';
import { Link, useNavigate } from 'react-router-dom';


// TODO fix CSS organization (i.e., class names)

function ResetPassword(){
    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/two-factor-auth");

    }

    return (
        <MainContainer>
        <div className="row h-100 m-0">

            <div className="border p-4 h-100 overflow-auto" style={{display: 'flex',justifyContent: 'center',}}>
                <div className="login-form-container">
                    <header className="login-form-header">
                        <h1>Reset your password</h1>
                    </header>

                    <form action='' method='get' className='login-form'> {/* TODO fill in action and method attributes */}
                        <div className='form-row'>
                            <label for='username'>Username / TechFactors Email</label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"/>
                            {/* TODO Figure out input type of Username/Email*/}
                        </div>

                        <div className='form-row'>
                            <label for='new-password'>New Password</label>
                            <input id='new-password' name='new-password' type='password'
                                placeholder="Enter new password"/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                        </div>

                        <div className='form-row'>
                            <label for='confirm-password'>Confirm Password</label>
                            <input id='confirm-password' name='confirm-password' type='password'
                                placeholder="Confirm new password"/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                        </div>

                        <div className='form-row'>
                            <Link to="/login" className="button-affirm">Back</Link>
                            <button type="submit" className="button-affirm" onClick={handleSubmit}>Next</button>
                        </div>

                        
                    </form>
                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default ResetPassword
