import React, { createContext, useContext, useState, useEffect } from "react";
import UserProfileAPI from "../api/UserProfileAPI"; // adjust import as needed

const UserContext = createContext();
const CurrentUserID = 8;

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [userLoading, setLoading] = useState(true);
    const [userError, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const response = await new UserProfileAPI().getUserProfile(CurrentUserID);
            if (response?.ok) {
                setUser(response.data);
            } else {
                console.error(response.statusMessage);
                setError(response.statusMessage);
            }
        } catch (err) {
            console.error("Error fetching User Profile:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, userLoading, userError, refresh: fetchUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for easier use
export const useUser = () => useContext(UserContext);