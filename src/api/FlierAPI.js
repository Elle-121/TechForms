import Base from './Base';

export default class FlierAPI extends Base {
    
    addFlier = async (data) => {
        return this.sendRequest({
            path: '/api/v1/flier/create',
            method: 'POST',
            data
        })
    }

    getFlier = async (flier_id) => {
        return this.sendRequest({
            path: `/api/v1/flier/${flier_id}`,
            method: 'GET',
        })
    }
    
    updateFlier = async (flier_id, data) => {
            return this.sendRequest({
                    path: `/api/v1/flier/${flier_id}`,
                    method: 'PUT',
                    data
                })
    }

    deleteFlier = async (flier_id) => {
            return this.sendRequest({
                    path: `/api/v1/flier/${flier_id}`,
                    method: 'DELETE',
                })
            }
            
    // getAllFlier = async () => {
    //     return this.sendRequest({
    //         path: `/api/v1/flier/all`,
    //         method: 'GET',
    //     })
    // }

        }