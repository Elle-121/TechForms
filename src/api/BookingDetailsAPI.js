import Base from "./Base";

export default class BookingDetailsAPI extends Base {
    getBookingDetailsById = async(id) => {
        return this.sendRequest({
            path: `/api/v1/booking_details/${id}`,
            method: 'GET',
        })
    }

    submitBookingDetails = async(data) => {
        return this.sendRequest({
            path: `/api/v1/booking_details/create`,
            method: 'POST',
            data
        })
    }
}