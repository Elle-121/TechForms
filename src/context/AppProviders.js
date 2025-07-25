import { UserProvider } from "./UserProfileContext";
import { UserCredentialsProvider } from "./UserCredentialsContext";

const AppProviders = ({ userID, children }) => {
    return (
        <UserCredentialsProvider credentialsID={userID}>
            <UserProvider>
                {children}                        
            </UserProvider>
        </UserCredentialsProvider>
    );
};

export default AppProviders;