import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import styles from "./errorHandling.module.scss";
import Accordion from "../../components/Accordion";

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
            <div className={styles['o-error-container']}>
                <figure>
                    <img src={errorImage} alt="Funny thing to show error"></img>
                </figure>
                <h1>Oops! Sorry, an error has occurred.</h1>
                <p>{error.message}</p>
                <Accordion title="Error Details">
                    <ul>
                        <li>{JSON.stringify(error)}</li>
                    </ul>
                </Accordion>
            </div>
        </div>
        {/* <div className="row h-100 m-0">
            <div className="h-100" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '50px'}}>
                <div className="error-container">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div> */}
    </MainContainer>
  );
}
