export default function filterData(item, filterValues) {
    // If filterValues is not provided, always return true
    if (!filterValues) return true;
    
    // Example for form_type and date range
    const formTypeMatch =
        !filterValues.form_type || item.FormType.form_name === filterValues.form_type;

    const dateMatch =
        (!filterValues.submitted_start || new Date(item.created_at) >= new Date(filterValues.submitted_start)) &&
        (!filterValues.submitted_end || new Date(item.created_at) <= new Date(filterValues.submitted_end));

    const statusMatch = 
        !filterValues.status || item.StatusType.status_name === filterValues.status;

    const purposeMatch = 
        !filterValues.purpose || item?.FlightRequest?.PurposeOfTravel.purpose_name === filterValues.purpose;

    // Add more filters as needed, following the same pattern:
    // (!filterValues.FIELD || item.FIELD === filterValues.FIELD)

    return formTypeMatch && dateMatch && statusMatch && purposeMatch;
}

//----FilterValues FIELD----
// requestor: '',
// requested_for: '',
// department: '',
// form_type: '',
// status: '',
// purpose: '',
// submitted_start: '',
// submitted_end: '',
// departure_city: '',
// departure_start: '',
// departure_end: '',
// return_city: '',
// return_start: '',
// return_end: '',
// start_business_start: '',
// start_business_end: '',
// end_business_start: '',
// end_business_end: '',
// approved_by: ''
//--------------------------

//--------Form FIELD--------
// "id": 1,
// "created_at": "2025-11-17T00:00:00.000Z",
// "FormType": {
//     "id": 1,
//     "form_name": "Flight Request"
// },
// "StatusType": {
//     "id": 3,
//     "status_name": "Approved"
// },
// "FlightRequest" (for Flight Request forms only)
//--------------------------

//--------Flight Request FIELD--------
// "FlightRequest": {
//     "id": 1,
//     "purpose_others": "",
//     "start_business": "2025-11-17T00:00:00.000Z",
//     "end_business": "2025-11-17T00:00:00.000Z",
//     "departure_date": "2025-11-17T00:00:00.000Z",
//     "departure_time": "03:07",
//     "departure_city": "Zamboanga",
//     "return_date": "2025-11-17T00:00:00.000Z",
//     "return_time": "03:16",
//     "return_city": "Legazpi",
//     "remarks": "Insufficient documentation.",
//     "PurposeOfTravel": {
//     "id": 5,
//     "purpose_name": "Client Call"
//     },
//     "Approver": {
//     "id": 3,
//     "approver_name": "ATP"
//     },
//     "Flier": {
//     "id": 1,
//     "first_name": "James",
//     "middle_name": "",
//     "last_name": "Peterson",
//     "birthday": "1985-08-07T00:00:00.000Z",
//     "extensions": "IV",
//     "title": "Mr."
//     },
//     "UserProfile": {
//     "id": 1,
//     "first_name": "Samantha",
//     "middle_name": "Hunter",
//     "last_name": "Navarro",
//     "department_id": 6,
//     "role_id": 2,
//     "profile_photo": "../sample.jpg"
//     },
//     "BookingDetail": {
//     "id": 1,
//     "departure_ref_no": "TFI253511",
//     "departure_cost": 1696,
//     "departure_ticket_path": "../sample.pdf",
//     "return_ref_no": "TFI256699",
//     "return_cost": 3878,
//     "return_ticket_path": "../sample.pdf"
//     }
// }
//--------------------------