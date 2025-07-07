import MainContainer from '../../components/MainContainer';
import { Link, useNavigate } from 'react-router-dom';


// TODO Add Timed Resend Button Function

function TwoFactorAuth(){
    let navigate = useNavigate();
    const dummyData = {
        phoneNumber: "+63 967 702 9444",
        timeTillOTP: 6
    };

    const handleSubmit = () => {
        navigate("/");

    }

    return (
        <MainContainer>
        <div className="row h-100 m-0">

            <div className="h-100"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    bottom: '125px'}}>
                <div className="login-container">
                    <header className="login-header">
                        <h1 className="login-header__h1">Enter Your OTP Code</h1>
                        <p>Enter the OTP we sent to <strong>{dummyData.phoneNumber}</strong></p>
                    </header>

                    <form action='' method='get' className="login-form"> {/* TODO fill in action and method attributes */}
                        <fieldset className='form-row'>
                            <div className="otp-input">
                                <input className="otp-input__number" id='otp1'
                                    name='otp1' type='text' placeholder="0"
                                    maxlength="1" size="1"/>
                                <input className="otp-input__number" id='otp2'
                                    name='otp2' type='text' placeholder="0"
                                    maxlength="1" size="1"/>
                                <input className="otp-input__number" id='otp3'
                                    name='otp3' type='text' placeholder="0"
                                    maxlength="1" size="1"/>
                                <input className="otp-input__number" id='otp4'
                                    name='otp4' type='text' placeholder="0"
                                    maxlength="1" size="1"/>
                                <input className="otp-input__number" id='otp5'
                                    name='otp5' type='text' placeholder="0"
                                    maxlength="1" size="1"/>
                                <input className="otp-input__number" id='otp6'
                                    name='otp6' type='text' placeholder="0"
                                    maxlength="1" size="1"/>
                            </div>
                            
                            <legend className="form-legend">
                                Resend available in <strong>{dummyData.timeTillOTP}
                                </strong> seconds. {/* TODO Format Time */}
                                <button type="button" className="login-form__link">Resend OTP</button>
                            </legend>

                        </fieldset>

                        <div className="button-row">
                            <Link to="/reset-password"
                                className="button-row__button button-row__button--negate">Back</Link>
                            <button type="submit" className="button-row__button button-row__button--affirm"
                            onClick={handleSubmit}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default TwoFactorAuth;
