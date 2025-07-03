import MainContainer from '../../components/MainContainer';
import { Link, useNavigate } from 'react-router-dom';


// TODO fix CSS organization (i.e., class names)

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

            <div className="border p-4 h-100 overflow-auto" style={{display: 'flex',justifyContent: 'center',}}>
                <div className="login-form-container">
                    <header className="login-form-header">
                        <h1>Enter Your OTP Code</h1>
                        <p><em>Enter the OTP we sent to <strong>{dummyData.phoneNumber}</strong></em></p>
                    </header>

                    <form action='' method='get' className='login-form'> {/* TODO fill in action and method attributes */}
                        <div className='form-row'>
                            <input id='otp1' name='otp1' type='number'
                                placeholder="0"/>
                            <input id='otp2' name='otp2' type='number'
                                placeholder="0"/>
                            <input id='otp3' name='otp3' type='number'
                                placeholder="0"/>
                            <input id='otp4' name='otp4' type='number'
                                placeholder="0"/>
                            <input id='otp5' name='otp5' type='number'
                                placeholder="0"/>
                            <input id='otp6' name='otp6' type='number'
                                placeholder="0"/>
                        </div>

                        <p>Resend available in {dummyData.timeTillOTP} seconds</p>
                        <button type="button">Resend OTP</button>

                        <div className='form-row'>
                            <Link to="/reset-password" className="button-neg">Back</Link>
                            <button type="submit" className="button-affirm" onClick={handleSubmit}>Reset</button>
                        </div>

                        
                    </form>
                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default TwoFactorAuth;
