import { createContext, useContext, useState, useEffect } from "react";
import FormTypeAPI from "../api/FormTypeAPI"; // adjust import as needed

const FormTypeContext = createContext();

export const FormTypeProvider = ({ children }) => {
    const [formTypes, setFormTypes] = useState([]);
    const [formTypeLoading, setLoading] = useState(true);
    const [formTypeError, setError] = useState(null);

    const fetchFormTypes = async () => {
        try {
            setLoading(true);
            const response = await new FormTypeAPI().getAllFormType();
            if (response?.ok) {
                setFormTypes(response.data);
            } else {
                console.error(response.statusMessage);
                setError(response.statusMessage);
            }
        } catch (err) {
            console.error("Error fetching form types:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFormTypes();
    }, []);

    return (
        <FormTypeContext.Provider value={{ formTypes, formTypeLoading, formTypeError, refresh: fetchFormTypes }}>
            {children}
        </FormTypeContext.Provider>
    );
};

// Custom hook for easier use
export const useFormType = () => useContext(FormTypeContext);