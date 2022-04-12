import axios, {AxiosRequestConfig} from 'axios'

const baseURL = process.env.REACT_APP_API_URL

export const pharmApiInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});


export const pharmApiInstanceAuth = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

export const pharmApiInstanceUpload = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    method: 'post',
    // mode: 'cors',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
    },
});

export const pharmApiInstanceDownloadFiles = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    responseType: 'blob'
});

pharmApiInstanceAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);


// Request interceptor for API UPLOAD calls
pharmApiInstanceUpload.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const token = await localStorage.getItem('token');
        if (config.headers) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor for API UPLOAD calls
pharmApiInstanceUpload.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // localStorage.removeItem('token');
        return Promise.reject(error);
    },
);

// Request interceptor for API UploadFiles calls
pharmApiInstanceDownloadFiles.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const token = await localStorage.getItem('token');
        if (config.headers) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor for API UploadFiles calls
pharmApiInstanceDownloadFiles.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Request interceptor for API calls
pharmApiInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const token = await localStorage.getItem('token');
        if (config.headers) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor for API calls
pharmApiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if ((error.response.status === 401 || error.response.status === 403) && (typeof originalRequest._retry === 'undefined' || !originalRequest._retry)) {
            localStorage.clear()
            window.location.replace('/')
        }
        return Promise.reject(error.response);
    },
)
