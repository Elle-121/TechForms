import { useRouteError } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import "./errorHandling.module.scss";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <MainContainer navVisible={false}>
        <div className="row h-100 m-0">
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
        </div>
    </MainContainer>
  );
}
