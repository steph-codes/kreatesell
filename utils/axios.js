import axios from "axios";
import { getToken } from ".";

export const baseURL = `http://kreatesellcom-001-site1.ctempurl.com/api/`;

class ApiService {
	constructor(contentType) {
		const instance = axios.create({
			baseURL,
			headers: {
				Accept: "*/*",
				// "Content-Type": "multipart/form-data",
				// "Content-Type": "application/json",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Origin": baseURL,
			},
		});

		instance.interceptors.response.use(this.handleSuccess, this.handleError);
		instance.interceptors.request.use((config) => {
			const token = getToken();
			if (!token) return config;

			config.headers["Authorization"] = "Bearer " + token;
			return config;
		});

		this.service = instance;
	}

	handleSuccess = (response) => response;

	handleError = (error) => {
		// const status = error?.response?.status;
		console.log("axios error whole response --->", error?.response);
		return Promise.reject(error?.response);
	};

	request(
		method,
		path,
		callback,
		errorCallback,
		payload,
		exectuteWhileLoading
	) {
		if (exectuteWhileLoading) exectuteWhileLoading();
		const requestMethod = method.toLowerCase();

		if (requestMethod === "get" || requestMethod === "options") {
			return this.service
				.request({
					method,
					url: path,
					responseType: "json",
				})
				.then((response) => callback(response), errorCallback);
		} else {
			return this.service
				.request({
					method,
					url: path,
					responseType: "json",
					data: payload,
				})
				.then((response) => callback(response?.data), errorCallback);
		}
	}
}

export default new ApiService();
