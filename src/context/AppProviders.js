import { ApproversProvider } from "./ApproversContext";
import { DepartmentsProvider } from "./DepartmentsContext";
import { PurposeOfTravelProvider } from "./PurposeOfTravelContext";
import { StatusTypeProvider } from "./StatusContext";
import { FormTypeProvider } from "./FormTypeContext";   

const AppProviders = ({ children }) => {
    return (
        <ApproversProvider>
            <DepartmentsProvider>
                <PurposeOfTravelProvider>
                    <StatusTypeProvider>                  
                        {/* <FormTypeProvider> */}
                            {children}
                        {/* </FormTypeProvider> */}
                    </StatusTypeProvider>
                </PurposeOfTravelProvider>
            </DepartmentsProvider>
        </ApproversProvider>
    );
};

export default AppProviders;