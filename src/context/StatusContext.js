import { createContext, useContext, useState, useEffect } from "react";
import StatusTypeAPI from "../api/StatusTypeAPI"; // adjust import as needed

const StatusTypeContext = createContext();

export const StatusTypeProvider = ({ children }) => {
    const [statusTypes, setStatusTypes] = useState([]);
    const [statusTypeLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStatusTypes = async () => {
        try {
            setLoading(true);
            const response = await new StatusTypeAPI().getAllStatusType();
            if (response?.ok) {
                setStatusTypes(response.data);
            } else {
                console.error(response.statusMessage);
                setError(response.statusMessage);
            }
        } catch (err) {
            console.error("Error fetching status types:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStatusTypes();
    }, []);

    return (
        <StatusTypeContext.Provider value={{ statusTypes, statusTypeLoading, error, refresh: fetchStatusTypes }}>
            {children}
        </StatusTypeContext.Provider>
    );
};

// Custom hook for easier use
export const useStatusType = () => useContext(StatusTypeContext);