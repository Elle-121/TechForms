import { createContext, useContext, useState, useEffect } from "react";
import PurposeOfTravelAPI from "../api/PurposeOfTravelAPI"; // adjust import as needed

const PurposeOfTravelContext = createContext();

export const PurposeOfTravelProvider = ({ children }) => {
    const [purposes, setPurposes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPurposes = async () => {
        try {
            setLoading(true);
            const response = await new PurposeOfTravelAPI().getAllPurposeOFTravel();
            if (response?.ok) {
                setPurposes(response.data);
            } else {
                console.error(response.statusMessage);
                setError(response.statusMessage);
            }
        } catch (err) {
            console.error("Error fetching purpose of travels:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPurposes();
    }, []);

    return (
        <PurposeOfTravelContext.Provider value={{ purposes, loading, error, refresh: fetchPurposes }}>
            {children}
        </PurposeOfTravelContext.Provider>
    );
};

// Custom hook for easier use
export const usePurposeOfTravel = () => useContext(PurposeOfTravelContext);