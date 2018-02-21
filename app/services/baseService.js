
class BaseService {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.BaseAPIUrl = 'api/';
        } else {
            this.BaseAPIUrl = 'http://localhost:2000/api/';
        }
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) { return response; }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }

    parseJSON(response) {
        return response.json();
    }
}

export default BaseService;