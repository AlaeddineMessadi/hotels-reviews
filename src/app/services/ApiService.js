import axios from 'axios';

const BASE_URL = '//fake-hotel-api.herokuapp.com/api';

/**
 * ApiService Class
 */
class ApiService {
  constructor() {
    const service = axios.create({
      baseURL: BASE_URL,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess = (response) => {
    return response;
  }

  handleError = (error) => {
    console.log(JSON.stringify({ error: { status: error.response.status, message: error.response.statusText } }))
    return Promise.reject(error)
  }

  get(path, params, callback) {
    return this.service.get(path, {
      params: params
    }).then(
      (response) => callback(response.status, response.data)
    );
  }

  post(path, payload, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => callback(response.status, response.data));
  }
};

// create an instance for the Api Service
const apiService = new ApiService();

export default apiService;