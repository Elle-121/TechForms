import React, { createContext, useContext, useState, useEffect } from "react";
import ApproverAPI from "../api/ApproverAPI"; // adjust import as needed

const ApproversContext = createContext();

export const ApproversProvider = ({ children }) => {
    const [approvers, setApprovers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApprovers = async () => {
        try {
            setLoading(true);
            const response = await new ApproverAPI().getAllApprover();
            if (response?.ok) {
                setApprovers(response.data);
            } else {
                console.error(response.statusMessage);
                setError(response.statusMessage);
            }
        } catch (err) {
            console.error("Error fetching approvers:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApprovers();
    }, []);

    return (
        <ApproversContext.Provider value={{ approvers, loading, error, refresh: fetchApprovers }}>
            {children}
        </ApproversContext.Provider>
    );
};

// Custom hook for easier use
export const useApprovers = () => useContext(ApproversContext);