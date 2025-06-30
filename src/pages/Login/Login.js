import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';

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
                    <h2>Manage all your Techfactor forms right here!</h2>
                
                    <p>Username/Email</p><p>*</p>
                    <input value="Enter Username or Techfactors email"></input>
                    <p>Password</p><p>*</p>
                    <input value="Enter password"></input>
                    <button>HIDE PASSWORD</button>

                    <a href="">Forgot your password?</a>

                    <button>Log In</button>


                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default Login
