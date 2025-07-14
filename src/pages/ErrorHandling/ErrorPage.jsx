import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import styles from "./errorHandling.module.scss";
import Callout from "../../components/Callout";

import errorImage from "../../assets/ErrorPageImage.png";


export default function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            error.message = "This page doesn't exist!";
        }

        if (error.status === 401) {
            error.message = "You aren't authorized to see this";
        }

        if (error.status === 503) {
            error.message = "Looks like our API is down";
        }

        if (error.status === 418) {
            error.message = "🫖";
        }
    }
    else {
        error.message = "Error but not a React Router one"
    }
  

  return (
    <MainContainer navVisible={false}>
        <div className={styles['o-error-layout']}>
            <div className={styles['c-error']}>
                <figure>
                    <img className={styles['c-figure__image']} src={errorImage}
                        alt="Funny thing to show error"></img>
                </figure>
                <h1 className={styles['c-error__heading']}>Oops! Sorry, an error has occurred.</h1>
                <p className={styles['c-error__message']}>{error.message}</p>
                <Callout title="Error Details">
                    <ul>
                        <li>{JSON.stringify(error)}</li>
                    </ul>
                </Callout>
            </div>
        </div>
    </MainContainer>
  );
}
