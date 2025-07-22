import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import MainContainer from '../../components/MainContainer';
import loginImage from "../../assets/LoginImage.jpeg"
import styles from "./login.module.scss";

// TODO: https://www.reddit.com/r/webdev/comments/nr9rso/how_to_validate_forms_properly_some_useful_dos/
// TODO: Connect validation to backend

const schemaValidator = z.object({
    username: z.email(
        {
            error: "Oops this is not an email address",
        }
    ),
    password: z.string(
        {
            error: "This doesn't seem right..."
        }).min(1,
        {
            error: "It's empty!"
        }
        ),
});

function Login(){
    let navigate = useNavigate();
    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
     } = useForm({
        resolver: zodResolver(schemaValidator),
     });

        
    const onSubmit = (data) => {
        try {
            console.log(errors)
    
            navigate("/");
        }
        catch (error) {
            
        }
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

                    <form action='' method='get' className={styles['login-form']}
                        onSubmit={handleSubmit(onSubmit)}> {/* TODO fill in action and method attributes */}
                        <div className={styles['form-row']}>
                            <label htmlFor='username'>Username / TechFactors Email
                                {errors.username && (
                                <span className={styles['error-text']}> *</span>
                                )}
                            </label>
                            <input id='username' name='username' type='text'
                                placeholder="Enter Username or TechFactors email"
                                className={styles["form-row__input-text"]}
                                {...register("username")}/>
                            {errors.username && (<p>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <span className={styles['error-text']}>&nbsp;{errors.username.message}</span>
                            </p>)} 
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor='password'>Password
                                {errors.password && (
                                <span className={styles['error-text']}> *</span>
                                )}
                            </label>
                            <input id='password' name='password' type='password'
                                placeholder="Enter password"
                                className={styles["form-row__input-text"]}
                                {...register("password")}/>
                            {errors.password && (<p>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <span className={styles['error-text']}>&nbsp;{errors.password.message}</span>
                            </p>)}                             {/* TODO Add Unhide Password https://www.wmcsoft.com/blog/how-to-implement-a-password-reveal*/}
                            <Link to="/reset-password" className={styles["login-form__link"]}>
                                Forgot your password?</Link>
                        </div>

                        <div className={styles['button-row']}>
                            <button type="submit" className={styles["button-row__button--affirm"]}
                            disabled={isSubmitting}>Log In</button>
                        </div>
                        {errors.root && (
                            <div>{errors.root.message}</div>
                        )}

                        
                    </form>
                </div>
            </div>
        </div>

         </MainContainer>
    );
}


export default Login
