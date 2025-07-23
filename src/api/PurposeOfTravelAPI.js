import Base from './Base';

export default class PurposeOfTravelAPI extends Base {
    
    addPurposeOFTravel = async (data) => {
        return this.sendRequest({
            path: '/api/v1/purpose_of_travel/create',
            method: 'POST',
            data
        })
    }

    getAllPurposeOFTravel = async () => {
        return this.sendRequest({
            path: `/api/v1/purpose_of_travel/all`,
            method: 'GET',
        })
    }

    getPurposeOFTravel = async (purpose_id) => {
        return this.sendRequest({
            path: `/api/v1/purpose_of_travel/${purpose_id}`,
            method: 'GET',
        })
    }
    
    updatePurposeOFTravel = async (purpose_id, data) => {
        return this.sendRequest({
            path: `/api/v1/purpose_of_travel/${purpose_id}`,
            method: 'PUT',
            data
        })
    }

    deletePurposeOFTravel = async (purpose_id) => {
        return this.sendRequest({
            path: `/api/v1/purpose_of_travel/${purpose_id}`,
            method: 'DELETE',
        })
    }

}