import MainContainer from "../../components/MainContainer";
import Calendar from "../Home/Calendar";

function Notifications(){
    return (
        <MainContainer>
            <div>
                <h1>Notifications Page</h1>
                <p>Welcome to the Notifications page!</p>
            </div>    
            <Calendar />
        </MainContainer>
            );
}

export default Notifications;