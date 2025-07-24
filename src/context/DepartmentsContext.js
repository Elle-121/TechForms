import { createContext, useContext, useState, useEffect } from "react";
import DepartmentAPI from "../api/DepartmentAPI"; // adjust import as needed

const DepartmentsContext = createContext();

export const DepartmentsProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);
    const [departmentsLoading, setLoading] = useState(true);
    const [departmentsError, setError] = useState(null);

    const fetchDepartments = async () => {
        try {
            setLoading(true);
            const response = await new DepartmentAPI().getAllDepartments();
            if (response?.ok) {
                setDepartments(response.data);
            } else {
                console.error(response.statusMessage);
                setError(response.statusMessage);
            }
        } catch (err) {
            console.error("Error fetching departments:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <DepartmentsContext.Provider value={{ departments, departmentsLoading, departmentsError, refresh: fetchDepartments }}>
            {children}
        </DepartmentsContext.Provider>
    );
};

// Custom hook for easier use
export const useDepartments = () => useContext(DepartmentsContext);