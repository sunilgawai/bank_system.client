import axios, { AxiosResponse } from "axios";
const baseURL = "http://localhost:4000";
class LocationService {
  static apiServer = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  static getLocation = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/location")
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getCountries = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/location/countries?country")
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getStates = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/location/states`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getCities = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/location/cities`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getDistricts = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/location/districts`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };
}

export default LocationService;
