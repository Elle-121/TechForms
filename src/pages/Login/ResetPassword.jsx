import MainContainer from '../../components/MainContainer';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./login.module.scss";


// TODO fix CSS organization (i.e., class names)

function ResetPassword(){
    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/two-factor-auth");

    }

    return (
        <MainContainer navVisible={false}>
        <div className="row h-100 m-0">

            <div className="h-100" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '50px'}}>
                <div className={styles["login-container"]}>
                    <header className={styles["login-header"]}>
                        <h1 className={styles["login-header__h1"]}>Reset your password</h1>
                    </header>

                    <form action='' method='get' className={styles['login-form']}> {/* TODO fill in action and method attributes */}
                        <div className={styles['form-row']}>
                            <label htmlFor='username'>Username / TechFactors Email</label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"
                                className={styles["form-row__input-text"]}/>
                            {/* TODO Figure out input type of Username/Email*/}
                        </div>

                        <div className={styles['form-row']}>
                            <label htmlFor='new-password'>New Password</label>
                            <input id='new-password' name='new-password' type='password'
                                placeholder="Enter new password"
                                className={styles["form-row__input-text"]}/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                        </div>

                        <div className={styles['form-row']}>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <input id='confirm-password' name='confirm-password' type='password'
                                placeholder="Confirm new password"
                                className={styles["form-row__input-text"]}/>
                            {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                        </div>

                        <div className={styles['button-row']}>
                            <Link to="/login" className={styles["button-row__button--negate"]}>Back</Link>
                            <button type="submit" className={styles["button-row__button--affirm"]} onClick={handleSubmit}>Next</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

         </MainContainer>
    );
}


export default ResetPassword
