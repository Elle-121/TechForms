import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../../components/MainContainer';

// TODO: Separate Logo and NavBar

function ResetPassword(){

    return (
        <MainContainer>
        {/* TODO Modify Header to remove navbar portion  */}
        PLACEHOLDER
        <div className="row h-100 m-0">
            {/* Left Side */}
            <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '50%', borderRight: '5px solid var(--tforange-color)' }}>

            </div>
            {/* Right Content */}
            <div className="p-4 h-100 overflow-auto" style={{width: '50%',display: 'flex',flexDirection: 'column',}}>
   
            </div>

        </div>

         </MainContainer>
    );
}


export default ResetPassword
