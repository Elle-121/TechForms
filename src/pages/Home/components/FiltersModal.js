import { Modal, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { departments, formTypes, reasons } from "./filterData";
import { useEffect } from "react";
import "../../../App.scss";

export default function FiltersModal({
    view, 
    setFilterView, 
    setFilterValues, 
    setCurrentPage, 
    dateRangeStart, 
    dateRangeEnd, 
    dateType, 
    status, 
    setStatusValue,
    setDateRange            
}) {

    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            requestor: '',
            requested_for: '',
            department: '',
            form_type: '',
            status: status || '',
            purpose: '',
            submitted_start: '',
            submitted_end: '',
            departure_city: '',
            departure_start: '',
            departure_end: '',
            return_city: '',
            return_start: '',
            return_end: '',
            start_business_start: '',
            start_business_end: '',
            end_business_start: '',
            end_business_end: '',
            approved_by: ''
        }
    })

    // Autofill date fields when props change
    useEffect(() => {
        // Helper to clear all date fields
        const clearAllDateFields = () => {
            setValue('submitted_start', '');
            setValue('submitted_end', '');
            setValue('departure_start', '');
            setValue('departure_end', '');
            setValue('return_start', '');
            setValue('return_end', '');
            setValue('start_business_start', '');
            setValue('start_business_end', '');
            setValue('end_business_start', '');
            setValue('end_business_end', '');
        };

        if (dateType && (dateRangeStart || dateRangeEnd)) {
            console.log("Setting date fields for type:", dateType);
            clearAllDateFields();
            if (dateType === 'submitted') {
                console.log("Setting submitted date fields");
                setValue('submitted_start', dateRangeStart ? dateRangeStart.toLocaleDateString('en-CA') : '');
                setValue('submitted_end', dateRangeEnd ? dateRangeEnd.toLocaleDateString('en-CA') : '');
            } else if (dateType === 'departure') {
                console.log("Setting departure date fields");
                setValue('departure_start', dateRangeStart ? dateRangeStart.toLocaleDateString('en-CA') : '');
                setValue('departure_end', dateRangeEnd ? dateRangeEnd.toLocaleDateString('en-CA') : '');
            } else if (dateType === 'return') {
                console.log("Setting return date fields");
                setValue('return_start', dateRangeStart ? dateRangeStart.toLocaleDateString('en-CA') : '');
                setValue('return_end', dateRangeEnd ? dateRangeEnd.toLocaleDateString('en-CA') : '');
            } else if (dateType === 'business_start') {
                console.log("Setting start business date fields");
                setValue('start_business_start', dateRangeStart ? dateRangeStart.toLocaleDateString('en-CA') : '');
                setValue('start_business_end', dateRangeEnd ? dateRangeEnd.toLocaleDateString('en-CA') : '');
            } else if (dateType === 'business_end') {
                console.log("Setting end business date fields");
                setValue('end_business_start', dateRangeStart ? dateRangeStart.toLocaleDateString('en-CA') : '');
                setValue('end_business_end', dateRangeEnd ? dateRangeEnd.toLocaleDateString('en-CA') : '');
            }
        } else if (!dateRangeStart && !dateRangeEnd) {
            // If both dates are cleared, clear all date fields
            clearAllDateFields();
        }
    }, [dateRangeStart, dateRangeEnd, dateType, setValue]);

    useEffect(() => {
        if (status){
            setValue("status", status);
        }
    }, [status, setValue]);


    const resetValues = () => {
        reset()
        setValue("status", '');
    }

    const submitValues = (values) => {
        setFilterValues(values);  // Update the filters from the modal
        setStatusValue(values.status);  // Update the status
        setCurrentPage(1);  // Reset to the first page
        // setFilterView(false);  // Close the modal
        console.log(values);
    }
    
    

    return ( 

        <Modal show={view} size="lg">
            <Modal.Body className="mt-2 mb-2">
                <div>
                    <Form onSubmit={handleSubmit(submitValues)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Requestor Name</Form.Label>
                                    <Form.Control {...register("requestor")} type="text" placeholder="Name of Requestor"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Requested For</Form.Label>
                                    <Form.Control {...register("requested_for")} type="text" placeholder="Name of Flier"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Department</Form.Label>
                                    <Form.Select {...register("department")}>
                                        <option value=''>Select Department</option>
                                        {
                                            departments.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Form Type</Form.Label>
                                    <Form.Select {...register("form_type")}>
                                        <option value=''>Select Form Type</option>
                                        {
                                            formTypes.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Status</Form.Label>
                                    <Form.Select {...register("status")}>
                                        <option value=''>Select Status</option>
                                        {/* {
                                            status.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }  */}

                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Rejected">Rejected</option>
                                        <option value="Draft">Draft</option>

                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Purpose of Travel</Form.Label>
                                    <Form.Select {...register("purpose")}>
                                        <option value=''>Select Purpose</option>
                                        {
                                            reasons.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label className='filter-form-label'>Date Submitted</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control {...register("submitted_start")} type="date"/>
                                        </Col>
                                        <Col>
                                            <Form.Control {...register("submitted_end")} type="date"/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Departure</Form.Label>
                                        <Form.Control {...register("departure_city")} className="mb-1" type="text" placeholder="Enter City"/>
                                        <Form.Control {...register("departure_start")} className="mb-1" type="date" placeholder="Start Range"/>
                                        <Form.Control {...register("departure_end")} className="mb-1" type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Return</Form.Label>
                                        <Form.Control {...register("return_city")} className="mb-1" type="text" placeholder="Enter City"/>
                                        <Form.Control {...register("return_start")} className="mb-1" type="date" placeholder="Start Range"/>
                                        <Form.Control {...register("return_end")} className="mb-1" type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label className='filter-form-label'>Start Date of Business</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control {...register("start_business_start")} type="date" placeholder="Start Range"/>
                                        </Col>
                                        <Col>
                                            <Form.Control {...register("start_business_end")} type="date" placeholder="End Range"/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label className='filter-form-label'>End Date of Business</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control {...register("end_business_start")} type="date" placeholder="Start Range"/>
                                        </Col>
                                        <Col>
                                            <Form.Control {...register("end_business_end")} type="date" placeholder="End Range"/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label className='filter-form-label'>To be approved by</Form.Label>
                                    <div key={`inline-radio`} className="mb-3">
                                    <Form.Check {...register("approved_by")}
                                        inline
                                        label="ARC"
                                        value="ARC"
                                        type="radio"
                                    />
                                    <Form.Check {...register("approved_by")}
                                        inline
                                        label="JDLC"
                                        value="JDLC"
                                        type="radio"
                                    />
                                    <Form.Check {...register("approved_by")}
                                        inline
                                        label="ATP"
                                        value="ATP"
                                        type="radio"
                                    />
                                    <Form.Check {...register("approved_by")}
                                        inline
                                        label="DFS"
                                        value="DFS"
                                        type="radio"
                                    />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                <Col className="text-end">
                                    <input className='button-neg ms-2' type='reset' onClick={resetValues} value='Clear'/>                            
                                    <button className='button-affirm ms-2' type='submit' onClick={()=>setFilterView(false)}>Apply</button>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>

    );
}

// In DashboardFilter.js

// import { useEffect } from "react";
// import { Modal, Form, Row, Col } from "react-bootstrap";
// import { useForm } from "react-hook-form";

// export default function DashboardFilter({
//   view,
//   setFilterView,
//   setFilterValues,
//   setCurrentPage,
//   status,  // The controlled status value
//   setStatus,  // Function to update status from outside
// }) {

//   const { register, handleSubmit, reset, setValue } = useForm({
//     defaultValues: {
//       requestor: '',
//       requested_for: '',
//       department: '',
//       form_type: '',
//       status: status || '',  // Initialize with the passed status
//       purpose: '',
//       submitted_start: '',
//       submitted_end: '',
//       departure_city: '',
//       departure_start: '',
//       departure_end: '',
//       return_city: '',
//       return_start: '',
//       return_end: '',
//       start_business_start: '',
//       start_business_end: '',
//       end_business_start: '',
//       end_business_end: '',
//       approved_by: ''
//     }
//   });

//   // Set the status value externally if it changes
//   useEffect(() => {
//     if (status) {
//       setValue("status", status); // Update form's status when prop changes
//     }
//   }, [status, setValue]);  // Re-run whenever status changes

//   const resetValues = () => {
//     reset();
//   }

//   const submitValues = (values) => {
//     setFilterValues(values);
//     setCurrentPage(1);  // Reset to first page when filter is applied
//     console.log(values);
//   }

//   return (
//     <Modal show={view} size="lg">
//       <Modal.Body className="mt-2 mb-2">
//         <div>
//           <Form onSubmit={handleSubmit(submitValues)}>
//             <Row>
//               <Col>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="filter-form-label">Requestor Name</Form.Label>
//                   <Form.Control {...register("requestor")} type="text" placeholder="Name of Requestor" />
//                 </Form.Group>
//               </Col>
//               <Col>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="filter-form-label">Requested For</Form.Label>
//                   <Form.Control {...register("requested_for")} type="text" placeholder="Name of Flier" />
//                 </Form.Group>
//               </Col>
//               <Col>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="filter-form-label">Department</Form.Label>
//                   <Form.Select {...register("department")}>
//                     <option></option>
//                     {/* Add departments here */}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="filter-form-label">Form Type</Form.Label>
//                   <Form.Select {...register("form_type")}>
//                     <option></option>
//                     {/* Add formTypes here */}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>

//               <Col>
//                 <Form.Group className="mb-3">
//                   <Form.Label className="filter-form-label">Status</Form.Label>
//                   <Form.Select {...register("status")}>
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     {/* You can dynamically render status options here */}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>

//             {/* More form fields here */}

//             <Row>
//               <Col className="text-end">
//                 <input className="button-neg ms-2" type="reset" onClick={resetValues} value="Clear" />
//                 <button className="button-affirm ms-2" type="submit" onClick={() => setFilterView(false)}>
//                   Apply
//                 </button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }
