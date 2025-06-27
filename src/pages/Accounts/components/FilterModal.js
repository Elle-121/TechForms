import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function FilterModal({view, setFilterView}) {
    
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");

    const clearForm = () => {
        setDepartment("");
        setRole("");
    };

    return (        
        <Modal show={view}>
           
            <Modal.Body>
            <div style={{paddingBottom:"20px"}}>
                
                <div className="d-flex justify-content-center">
                    Department
                </div>

                <div className="d-flex justify-content-center">
                    <select id='deptSelect' class="form-select" aria-label="Default select example" value={department} onChange={e => setDepartment(e.target.value)}>
                        <option selected>Select Answer</option>
                        <option value='1'>2tech</option>
                        <option value='2'>Accounting</option>
                        <option value='3'>Customer Service</option>
                        <option value='4'>ETS</option>
                        <option value='5'>Finance</option>
                        <option value='6'>HR/Admin</option>
                        <option value='7'>Marketing</option>
                        <option value='8'>Production, Logistics, Purchasing</option>
                        <option value='9'>R&D</option>
                        <option value='10'>Sales</option>
                        <option value='11'>SHS</option>
                        <option value='12'>TFI Academy</option>
                        <option value='13'>Product Training & Support</option>
                        <option value='14'>CoreDev</option>
                    </select>
                </div>
                
            </div>

            <div>
                <div className="d-flex justify-content-center"> 
                    Role
                </div>
        
                <div className="d-flex justify-content-center"> 
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="HR" checked={role === "HR"} onChange={e => setRole(e.target.value)}/>
                        <label className="form-check-label" for="inlineRadio1">HR</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Employee" checked={role === "Employee"} onChange={e => setRole(e.target.value)}/>
                        <label className="form-check-label" for="inlineRadio2">Employee</label>
                    </div>
                </div>
            </div>

            </Modal.Body>

            <Modal.Footer>
                <button type='button' onClick={clearForm}>Clear</button>
                <button type='button' onClick={()=>setFilterView(false)}>Apply</button>
            </Modal.Footer>

        </Modal>
    );
};