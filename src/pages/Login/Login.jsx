import MainContainer from '../../components/MainContainer';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../../assets/LoginImage.jpeg"
import styles from "./login.module.scss";

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
                <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>Made By</h1>
                <figure className={styles['login-figure']}>
                    <img src={loginImage} className={styles['login-figure__image']}
                    alt="TechFactor Interns"/>
                </figure>
            </div>

            <div className="h-100" style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '50px'}}>
                <div className={styles["login-container"]}>
                    <header className={styles["login-header"]}>
                        <h1 className={styles["login-header__h1"]}>
                            Welcome Back to
                            <strong className={styles["login-header__strong"]}> TechForms*</strong></h1>
                        <p>
                            Manage all your TechFactors forms right here!</p>
                    </header>

                    <form action='' method='get' className={styles['login-form']}> {/* TODO fill in action and method attributes */}
                        <div className={styles['form-row']}>
                            <label for='username'>Username / TechFactors Email</label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"
                                className={styles["form-row__input-text"]}/>
                            {/* TODO Figure out input type of Username/Email*/}
                        </div>

                        <div className={styles['form-row']}>
                            <label for='password'>Password</label>
                            <input id='password' name='password' type='password'
                                placeholder="Enter password"
                                className={styles["form-row__input-text"]}/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                            <Link to="/reset-password" className={styles['form-row__text--small']}>
                                Forgot your password?</Link>
                        </div>

                        <div className={styles['button-row']}>
                            <button type="submit" className={styles["button-row__button--affirm"]}
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
